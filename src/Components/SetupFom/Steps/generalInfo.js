import { CardContent, Container, TextareaAutosize, TextField } from "@material-ui/core";
import ActionButtons from "../Components/actionButtons";
import Country from "../Components/countries";
import Language from "../Components/languages";
import Role from "../Components/role";
import UploadImage from "../Components/uploadImage";
import useStyles from "../styles";
import { personalInfoValidateSchema } from "../../../Validations/personalInfo";
import { useState } from "react";
import { Alert } from "@mui/material";


const PersonalInformation = ({ user, formik, ...props }) => {
  const classes = useStyles();
   const [error, setError] = useState(""); 
   const initial = {
     profileImage: false, 
     role: false, 
     bio: false, 
     country: false, 
     languages: false
   }
   const [hasError, setHasError] = useState(initial); 

   const formData = {
      profileImage: formik.values.profileImage, 
      role: formik.values.role, 
      bio: formik.values.bio,
      country: formik.values.country, 
      languages: formik.values.languages
   }

   const validate = async () => {
     setHasError(initial); 
     setError("");
      try{
        await personalInfoValidateSchema.validate(formData)
        console.log(props); 
        await props.nextStep()
      
      }catch(error){
        setError(error.message)
        let value = error.path
        console.log(hasError); 
        setHasError({...hasError, [`${value}`]: true})
      }
      
   }
  

  return (
    <Container disableGutters className={classes.container}>
       {error.length > 0 && (<Alert variant="outlined" severity="error" className={classes.error}>
  {error}
</Alert>)}
      <CardContent className={classes.cardContent}>
        <UploadImage user={user} formik={formik} />
        <Role formik={formik} hasError={hasError}/>
        <Country formik={formik} hasError={hasError} />
        <Language formik={formik} hasError={hasError} />
        <TextField
          required
          label="What inspired you to join tech?"
          multiline
          name="bio"
          value={formik.values.bio}
          onChange={formik.handleChange}
          InputProps={{
            inputComponent: TextareaAutosize,
            rows: 3
          }}
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
