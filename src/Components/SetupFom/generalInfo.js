import { CardContent, Container, TextField } from "@material-ui/core";
import ActionButtons from "./actionButtons";
import Country from "../Inputs/countries";
import Language from "../Inputs/languages";
import UploadImage from "../Inputs/uploadImage";
import useStyles from "./styles";
import { personalInfoValidateSchema } from "../../Validations/personalInfo";
import { useState } from "react";
import { Alert } from "@mui/material";
import TextArea from "../Inputs/textArea";


const PersonalInformation = ({ user, formik, ...props}) => {
  const classes = useStyles();
  const [error, setError] = useState(""); 
  const initial = {
     profileImage: false, 
     bio: false, 
     country: false, 
     languages: false,
     fullName: false,
   }
   const [hasError, setHasError] = useState(initial); 

   const formData = {
      profileImage: formik.values.profileImage, 
      bio: formik.values.bio,
      country: formik.values.country, 
      languages: formik.values.languages,
      fullName: formik.values.fullName,
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
       {error.length > 0 && (<Alert severity="error" className={classes.error}>
  {error}
</Alert>)}
      <CardContent className={classes.cardContent}>
        <UploadImage user={user} formik={formik} />
        <TextField required label="Full Name" name="fullName" value={formik.values.fullName} error={hasError.fullName} onChange={formik.handleChange} variant="outlined" className={classes.item}/>
        <Country formik={formik} hasError={hasError} />
        <Language formik={formik} hasError={hasError} />
        <TextArea formik={formik} hasError={hasError} />
     </CardContent>
      <ActionButtons {...props}  nextStep={validate}/>
    </Container>
  );
};

export default PersonalInformation;
