import useStyles from "../styles"; 
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Delete, AddAPhoto } from "@material-ui/icons";
import {Storage} from "aws-amplify"
import awsExports from "../../../aws-exports"
import { Avatar, Box, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import CircularProgress, {
} from '@material-ui/core/CircularProgress';

const UploadImage = ({user, formik}) => {
    const classes = useStyles(); 
    const [progress, setProgress] = useState(false); 

    const onChange  = async(e) => {
      const file = e.target.files[0];
      let fileName = file.name; 
      const updatedFileName = user.username + fileName.slice(fileName.lastIndexOf('.'));
      //change the filename 
      Object.defineProperty(file, 'name', {
        writable: true,
        value: updatedFileName
      })
      //uploading image
      try{
        setProgress(true);
         const result = await Storage.put(file.name, file, {
            level: "protected",
            contentType: file.type
          
          });
         const image  = {
            name: file.name, 
            file:{
                bucket: awsExports.aws_user_files_s3_bucket,
                region: awsExports.aws_user_files_s3_bucket_region, 
                key:   result.key
            }
        }
        formik.setFieldValue("profileImage", image); 

      }catch(error){
        console.log(error); 
      }

  }
  
  

  useEffect(() =>{
     downloadImage()
     // eslint-disable-next-line
  }, [formik.values.profileImage.name])


  const downloadImage = async() => {
      if(formik.values.profileImage.name.length !== 0){
        const result = await Storage.get(formik.values.profileImage.file.key, { download: true, level: "protected"});
        formik.setFieldValue("profileImageUrl", URL.createObjectURL(result.Body)); 
        //setProgress(0);
      }
      setProgress(false);
  }



  const deleteImage = async()  => {
    try{
        await Storage.remove(formik.values.profileImage.name);
        formik.setFieldValue("profileImage", {name: "", file: {}}); 
    }catch(error){
        console.log(error);
    }
     
  }

  return (
        <>
        <Box className={classes.uploadButtonBox}>
          {formik.values.profileImage.name.length <= 0 ? (
            <AccountCircleIcon  className={classes.circleIcon}/>
          ) : (
            <Avatar
              className={classes.avatar}
              alt={`${user.attributes.name}'s profile`}
              src={formik.values.profileImageUrl}
            />
          )}
           {progress && (
            <CircularProgress className={classes.circularProgress} />
           )}

           {formik.values.profileImage.name.length <= 0 && !progress && (
            <Button
            color="primary"
            aria-label="upload picture"
            component="label"
            disableRipple={true}
            className={classes.uploadButton}
            startIcon={<AddAPhoto />}
            >
            Upload profile
            <input name="profileImage"  hidden accept="image/*" type="file" onChange={(e) => onChange(e)} />
            
          </Button>

        )}
        
        {formik.values.profileImage.name.length > 0 && !progress && (

          <Button
          color="primary"
          aria-label="Delete picture "
          disableRipple={true}
          component="label"
          className={classes.uploadButton}
          startIcon={<Delete />}
          onClick={deleteImage}
        >
            Delete Profile

        </Button>

        )} 
         
          
        </Box>
        </>
       


    )

}

export default UploadImage;