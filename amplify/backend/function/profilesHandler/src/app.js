/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const AWS = require("aws-sdk");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const bodyParser = require("body-parser");
const express = require("express");

AWS.config.update({ region: process.env.TABLE_REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

let tableName = "sheMentorsAfrica";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + "-" + process.env.ENV;
}

const userIdPresent = false; // TODO: update in case is required to use that definition
const partitionKeyName = "PK";
const partitionKeyType = "S";
const sortKeyName = "SK";
const sortKeyType = "S";
const hasSortKey = sortKeyName !== "";
const path = "/profiles";
const UNAUTH = "UNAUTH";
const hashKeyPath = "/:" + partitionKeyName;
const sortKeyPath = hasSortKey ? "/:" + sortKeyName : "";

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// convert url string param to expected Type
const convertUrlType = (param, type) => {
  switch (type) {
    case "N":
      return Number.parseInt(param);
    default:
      return param;
  }
};

const getUserId = (request) => {
  try {
    const reqContext = request.apiGateway.event.requestContext;
    const authProvider = reqContext.authorizer.claims;
    return authProvider.sub;
  } catch (error) {
    return "UNAUTH";
  }
};

app.get("/profiles",  function (request, response) {
  console.log( request.body.profile.profile.sub)
  let params = {
    TableName: tableName,
    IndexName: "profilesByRole",
    KeyConditionExpression: "#4db11 = :4db11 AND #4db12 <> :4db12",
    ProjectionExpression: "#4db10",
    ExpressionAttributeNames: {"#4db10":"profile","#4db11":"role", "#4db12": "PK"},
    ExpressionAttributeValues: {":4db11": "Mentor", ":4db12": request.body.profile.profile.sub}
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

//get profile of specific id
app.get("/profiles/:id", function (request, response) {
  let params = {
    TableName: tableName,
    AttributesToGet: ["profile"],
    Key: {
      PK: request.params.id,
      SK: `profile-${request.params.id}`,
    },
  };
  dynamodb.get(params, (error, result) => {
    if (error) {
      response.json({ statusCode: 500, error: error.message });
    } else {
      response.json({
        statusCode: 200,
        url: request.url,
        body: JSON.stringify(result.Item),
      });
    }
  });
});

app.listen(3000, function () {
  console.log("App started");
});

//post profile
app.post(path, function (request, response) {
  const timestamp = new Date().toISOString();
  let params = {
    TableName: tableName,
    Item: {
      profile: request.body.profile,
      PK: getUserId(request),
      SK: `profile-${getUserId(request)}`,
      role: request.body.profile.role,
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
});

//put profile
app.put(path, function (request, response) {
  const timestamp = new Date().toISOString();
  let params = {
    TableName: tableName,
    Item: {
      profile: request.body.profile,
      PK: getUserId(request),
      SK: `profile-${getUserId(request)}`,
      role: request.body.profile.role,
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
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
