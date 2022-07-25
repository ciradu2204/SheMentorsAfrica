import {
  Backdrop,
  Button,
  Card,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { Box } from "@material-ui/core";
import { Auth } from "aws-amplify";
import React, { useEffect } from "react";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { Alert } from "@mui/material";
import PasswordChecklist from "react-password-checklist"
import SignIn from "./signin";
import SignUp from "./signup";
import ConfirmSignUp from "./confirmsignup";
import ResetPassword from "./resetpassword";
import ConfirmResetPassword from "./confirmresetpassword";
import { useNavigate } from "react-router-dom";

const AuthUser = () => {
  const initialFormState = {
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
    code: "",
    showPassword: false,
    showConfirmPassword: false,
  };
  const navigate = useNavigate(); 
  const [formState, updateFormState] = useState(initialFormState);
  const classes = useStyles();
  const [formType, setFormType] = useState("Sign In")
  const [subtitle, SetSubtitle] = useState(
    "Welcome back, You have been missed!"
  );
  const [validPasswordChecklist, SetValidPasswordChecklist] = useState(false)
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); 

  const authenticate = async() => {
    const { name, email, password, code } = formState;
    let username = email; 
    if(areFieldsValid()){
      setLoading(true)
      try {
        if (formType === "Sign In") {
          await Auth.signIn({ username, password });
          navigate("/dashboard")
        } else if (formType === "Sign Up") {
           await Auth.signUp({username, password, attributes: { email, name } });
           setFormType( "Confirm Sign Up" );
           setSuccess("Auth code successfully sent to your email")
        } else if (formType === "Confirm Sign Up") {
          await Auth.confirmSignUp(username, code );
          setFormType( "Sign In" );
          setSuccess("Successfully signed up, sign in!")
        } else if (formType === "Reset Password") {
          await Auth.forgotPassword(username)
          setFormType("Confirm Reset Password");
          setSuccess("Auth code successfully sent to your email")
        }else if (formType === "Confirm Reset Password"){
          await Auth.forgotPasswordSubmit(username, code, password);
          setFormType( "Sign In" ); 
          setSuccess("Successfully changed password, sign in!")
        }
        setError("");
        setLoading(false)
      } catch (exception_var) {
        setSuccess(""); 
        setError(exception_var.message);
        setLoading(false)

      }

    }
  
    };

  const forgotPassword =  () => {
    setFormType("Reset Password");

   };
  const changeForm = () => {
    setError("");
    if (formType === "Sign In") {
      setFormType("Sign Up");
      updateFormState(initialFormState)

    } else {
      setFormType("Sign In");
      updateFormState(initialFormState)
    }
  };
  const resendConfirmationCode = async() => {
    const {email }  = formState
    let username = email; 
    try {
      await Auth.resendSignUp(username);
    } catch (error) {
      setError(error.message);
    }

  }

  const areFieldsValid = () => {
    const { name, email, password, confirmPassword, code} = formState;
    setSuccess("")
     if (formType === "Sign Up") {
      if (
        name.length === 0 ||
        email.length === 0 ||
        password.length === 0 ||
        confirmPassword.length === 0
      ) {
        setError("All fields should be filled");
        return false;
      } else if(!validPasswordChecklist) {
        setError("Password does not meet the requirements!");
        return false;
      }else{
        return true;
      }
    } else if (formType === "Sign In") {
      if (password.length === 0 || email.length === 0) {
        setError("All fields should be filled");
        return false;
      } else {
        setError("");
        return true;
      }
    } else if (formType === "Confirm Sign Up") {
      if (code.length === 0) {
        setError("Auth Code is required");
        return false;
      } else {
        setError("");
        return true;
      }
    } else if (formType === "Confirm Reset Password"){
        if(password.length === 0 ||
          confirmPassword.length === 0 || code.length === 0){
            setError("The fields can not be empty")
            return false
        }else if(!validPasswordChecklist){
            setError("The password does not follow the checklist")
            return false
        }else{
          return true
        }
    }else if (formType === "Reset Password"){
      if(email.length === 0){
        setError("The email can not be empty")
        return false
      }else{
        return true; 
      }
    }else{
      return true; 
    }
  };

  const handleClickShowPassword = () => {
    updateFormState({
      ...formState,
      showPassword: !formState.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    updateFormState({
      ...formState,
      showConfirmPassword: !formState.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    if (event.type === "mousedown") {
      event.preventDefault();
    }
  };
  const onChange = (e) => {
    updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
  };


  useEffect(() => {
    if (formType === "Sign Up") {
      SetSubtitle("Create your account to use She Mentors Africa");
    } else if (formType === "confirm Sign Up") {
      SetSubtitle("Confirm Email ");
    } else {
      SetSubtitle("Welcome back, You have been missed!");
    }

  }, [formType]);

  return (
    <Container className={classes.container}>
   
      <Card className={classes.card}>
        <Box className={classes.header}>
          <Typography
            variant="h5"
            color="secondary"
            className={classes.formType}
          >
            {formType}
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            {subtitle}
          </Typography>
          {success.length !== 0? <Alert severity="success" className={classes.alert}>{success}</Alert>: null}
          {error.length > 0 ? (
            <Alert severity="error" className={classes.alert}>
              {error}
            </Alert>
          ) : null}
          <Button
            variant="outlined"
            className={classes.googleAuthenticateButton}
            onClick={() => Auth.federatedSignIn({provider: "Google"})}
          >
            Sign In with Google
          </Button>
          <Divider className={classes.divider} spacing={5}>
            or
          </Divider>
        </Box>
        {formType === "Sign In" && (
          <SignIn formState={formState} onChange={onChange} handleClickShowPassword={handleClickShowPassword} handleMouseDownPassword={handleMouseDownPassword}/>
        )}
        {formType === "Sign Up" && (
         <SignUp formState={formState} onChange={onChange} handleClickShowPassword={handleClickShowPassword} handleMouseDownPassword={handleMouseDownPassword} handleClickShowConfirmPassword={handleClickShowConfirmPassword} />
        )}
        {formType === "Confirm Sign Up" && (
          <ConfirmSignUp formState={formState} onChange={onChange}/>
        )}
        {formType === "Reset Password" && (
         <ResetPassword onChange={onChange}/>
        )}
        {formType === "Confirm Reset Password" && (
         <ConfirmResetPassword formState={formState} onChange={onChange}  handleClickShowConfirmPassword={handleClickShowConfirmPassword} handleClickShowPassword={handleClickShowPassword} handleMouseDownPassword={handleMouseDownPassword}/>
        )}
        <Box className={classes.footer}>
          {(formType === "Sign Up" || formType === "Confirm Reset Password") && (
            <PasswordChecklist
            rules={["minLength","specialChar","number","capital","match", "lowercase"]}
            minLength={8}
            className={classes.checklist}
            value={formState.password}
            valueAgain={formState.confirmPassword}
            onChange={(isValid) => SetValidPasswordChecklist(isValid)}
          />
          )}
          {formType === "Sign In" && (
            <Button
              variant="text"
              className={classes.forgotPassword}
              onClick={forgotPassword}
            >
              Forgot Password?
            </Button>
          )}
           {formType === "Confirm Sign Up" && (
            <Button
              variant="text"
              className={classes.resendCode}
              onClick={resendConfirmationCode}
            >
              Resend Code?
            </Button>
          )}
        
          <Button
            variant="contained"
            size="large"
            className={classes.authButton}
            onClick={authenticate}
          >
            {formType}
          </Button>
          {formType === "Sign In" && (
            <Box component="div" className={classes.changeState}>
              Don't have an account?
              <Button
                variant="text"
                className={classes.goToSignUpButton}
                onClick={() => changeForm()}
              >
                Create an account
              </Button>
            </Box>
          )}
          {formType === "Sign Up" && (
            <Box component="" className={classes.changeState}>
              Already have an account?
              <Button
                variant="text"
                className={classes.goToSignUpButton}
                onClick={() => changeForm()}
              >
                Sign In
              </Button>
            </Box>
          )}
          {(formType === "Reset Password" || formType === "Confirm Reset Password") && (
            <Box component="" className={classes.changeState}>
              Remember your password?
              <Button
                variant="text"
                className={classes.goToSignUpButton}
                onClick={() => changeForm()}
              >
                Sign In
              </Button>
            </Box>
          )}
        </Box>
      </Card>
      <Backdrop
        className={classes.backdrop}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
};

export default AuthUser;
