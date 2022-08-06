/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/



const AWS = require('aws-sdk')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const bodyParser = require('body-parser')
const express = require('express')

AWS.config.update({ region: process.env.TABLE_REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

let tableName = "sheMentorsAfrica";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
}

const crypto = require("crypto")
 
const path = "/bookings";

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

// convert url string param to expected Type
const convertUrlType = (param, type) => {
  switch(type) {
    case "N":
      return Number.parseInt(param);
    default:
      return param;
  }
}

const getUserId = (request) => {
  try {
    const reqContext = request.apiGateway.event.requestContext;
    const authProvider = reqContext.authorizer.claims;
    return authProvider.sub;
  } catch (error) {
    return "UNAUTH";
  }
};


//post bookings 
app.post(path, function (request, response) {
  const timestamp = new Date().toISOString();
  let params = {
    TableName: tableName,
    Item: {
      booking: request.body.booking,
      PK: getUserId(request),
      SK: `booking-${crypto.randomUUID()}`,
      createdAt: timestamp,
    },
  };

  dynamodb.put(params, (error, result) => {
    if (error) {
      response.json({
        statusCode: 500,
        error: error.message,
        url: request.url,
      });
    } else {
      response.json({
        statusCode: 200,
        url: request.url,
        body: JSON.stringify(params.Item),
      });
    }
  });
})

app.get("/bookings",  function (request, response) {
  let params = {
    TableName: tableName,
    KeyConditionExpression: "#4db11 = :4db11 AND begins_with(#4db12, :4db12)",
    ProjectionExpression: "#4db10",
    ExpressionAttributeNames: {"#4db10":"booking","#4db11":"PK", "#4db12": "SK"},
    ExpressionAttributeValues: {":4db11": getUserId(request), ":4db12": "booking"},
  };
  dynamodb.query(params, (error, result) => {
    if (error) {
      response.json({ statusCode: 500, error: error.message });
    } else {
      response.json({
        statusCode: 200,
        url: request.url,
        body: JSON.stringify(result.Items),
      });
    }
  });
});


app.listen(3000, function() {
  console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
