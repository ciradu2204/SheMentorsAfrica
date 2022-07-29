import { CardContent, Container, TextField } from "@material-ui/core";
import ActionButtons from "../Components/actionButtons";
import { useEffect } from "react";
import Country from "../Components/countries";
import Language from "../Components/languages";
import UploadImage from "../Components/uploadImage";
import useStyles from "../styles";
import { personalInfoValidateSchema } from "../../../Validations/personalInfo";
import { useState } from "react";
import { Alert } from "@mui/material";


const PersonalInformation = ({ user, formik, ...props}) => {
  const classes = useStyles();
  const [error, setError] = useState(""); 
  const initial = {
     profileImage: false, 
     bio: false, 
     country: false, 
     languages: false
   }
   const [hasError, setHasError] = useState(initial); 

   const formData = {
      profileImage: formik.values.profileImage, 
      bio: formik.values.bio,
      country: formik.values.country, 
      languages: formik.values.languages
   }

    

   const validate = async () => {
      try{
        await personalInfoValidateSchema.validate(formData)
       props.goToNamedStep("Interest")
      }catch(error){
        setError("");     
        setError(error.message)
        let value = error.path
        setHasError({...initial, [`${value}`]: true})
      }


      
   }
  

  return (
    <Container disableGutters className={classes.container}>
       {error.length > 0 && (<Alert variant="outlined" severity="error" className={classes.error}>
  {error}
</Alert>)}
      <CardContent className={classes.cardContent}>
        <UploadImage user={user} formik={formik} />
        <Country formik={formik} hasError={hasError} />
        <Language formik={formik} hasError={hasError} />
        <TextField
          required
          label="What inspired you to join tech?"
          multiline
          name="bio"
          value={formik.values.bio}
          onChange={formik.handleChange}
          minRows={6}
          maxRows={6}
          error={hasError.bio}
          className={classes.item}
          variant="outlined"
        />
     </CardContent>
      <ActionButtons {...props}  nextStep={validate}/>
    </Container>
  );
};

export default PersonalInformation;
