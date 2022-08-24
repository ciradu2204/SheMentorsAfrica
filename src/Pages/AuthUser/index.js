import { Button, Card, Container, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Box } from "@material-ui/core";
import { Auth } from "aws-amplify";
import React, { useEffect } from "react";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { Alert } from "@mui/material";
import SignIn from "./signin";
import SignUp from "./signup";
import ConfirmSignUp from "./confirmsignup";
import ResetPassword from "./resetpassword";
import ConfirmResetPassword from "./confirmresetpassword";
import { useOutletContext, useNavigate } from "react-router-dom";
import { signUpValidationShema } from "../../Validations/signUp";
import { signInValidationShema } from "../../Validations/signIn";
import { confirmSignUpValidationShema } from "../../Validations/confirmSignUp";
import { confirmResetPasswordValidationShema } from "../../Validations/confirmResetPassword";
import { resetPasswordValidationShema } from "../../Validations/resetPassword";

const AuthUser = () => {
  const [setBackdropOpen] = useOutletContext();
  const initialFormState = {
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
    code: "",
    showPassword: false,
    showConfirmPassword: false,
  };
  const [formState, updateFormState] = useState(initialFormState);
  const classes = useStyles();
  const [formType, setFormType] = useState("Sign In");
  const [subtitle, SetSubtitle] = useState(
    "Welcome back, You have been missed!"
  );
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const authenticate = async () => {
    const { name, email, password, code } = formState;
    let username = email;
    let fieldsValid = await areFieldsValid()
    if (fieldsValid) {
      setBackdropOpen(true);
      try {
        switch (formType) {
          case "Sign In":
            await Auth.signIn({ username, password });
            navigate("/mentors");
            break;
          case "Sign Up":
            await Auth.signUp({
              username,
              password,
              attributes: { email, name },
            });
            setFormType("Confirm Sign Up");
            setSuccess(
              "Auth code successfully sent to your email, check your spam if you don't see it"
            );
            break;
          case "Confirm Sign Up":
            await Auth.confirmSignUp(username, code);
            setFormType("Sign In");
            setSuccess("Successfully signed up, sign in!");
            break;
          case "Reset Password":
            await Auth.forgotPassword(username);
            setFormType("Confirm Reset Password");
            setSuccess(
              "Auth code successfully sent to your email, check your spam if you don't see it"
            );
            break;
          case "Confirm Reset Password":
            await Auth.forgotPasswordSubmit(username, code, password);
            setFormType("Sign In");
            setSuccess("Successfully changed password, sign in!");
            break;
          default:
        }
        setError("");
        setBackdropOpen(false);
      } catch (exception_var) {
        setSuccess("");
        if (exception_var.message === "User is not confirmed.") {
          setFormType("Confirm Sign Up");
          setError("You have not confirmed your email yet");
          resendConfirmationCode();
        } else {
          updateFormState(initialFormState)
          setError(exception_var.message);
        }
        setBackdropOpen(false);
      }
    }
  };

  const forgotPassword = () => {
    setFormType("Reset Password");
  };
  const changeForm = () => {
    setError("");
    if (formType === "Sign In") {
      setFormType("Sign Up");
      updateFormState(initialFormState);
    } else {
      setFormType("Sign In");
      updateFormState(initialFormState);
    }
  };
  const resendConfirmationCode = async () => {
    const { email } = formState;
    let username = email;
    try {
      await Auth.resendSignUp(username);
    } catch (error) {
      setError(error.message);
    }
  };

  const areFieldsValid = async () => {
    setSuccess("");
    console.log(formState)
    try {
      switch (formType) {
        case "Sign Up":
          console.log("called")
          await signUpValidationShema.validate(formState);
          break;
        case "Sign In":
          await signInValidationShema.validate(formState);
          break;
        case "Confirm Sign Up":
          await confirmSignUpValidationShema.validate(formState);
          break;
        case "Confirm Reset Password":
          await confirmResetPasswordValidationShema.validate(formState);
          break;
        case "Reset Password":
          await resetPasswordValidationShema.validate(formState);
          break;
        default:
      }
      return true;
    } catch (error) {
      setError(error.message);
      return false;
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

  const googleAuthenticate = async () => {
    await Auth.federatedSignIn({ provider: "Google" });
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
          {success.length !== 0 ? (
            <Alert severity="success" className={classes.alert}>
              {success}
            </Alert>
          ) : null}
          {error.length > 0 ? (
            <Alert severity="error" className={classes.alert}>
              {error}
            </Alert>
          ) : null}
          <Button
            variant="outlined"
            className={classes.googleAuthenticateButton}
            onClick={googleAuthenticate}
          >
            Sign In with Google
          </Button>
          <Divider className={classes.divider} spacing={5}>
            or
          </Divider>
        </Box>
        {formType === "Sign In" && (
          <SignIn
            formState={formState}
            onChange={onChange}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
          />
        )}
        {formType === "Sign Up" && (
          <SignUp
            formState={formState}
            onChange={onChange}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            handleClickShowConfirmPassword={handleClickShowConfirmPassword}
          />
        )}
        {formType === "Confirm Sign Up" && (
          <ConfirmSignUp formState={formState} onChange={onChange} />
        )}
        {formType === "Reset Password" && <ResetPassword onChange={onChange} />}
        {formType === "Confirm Reset Password" && (
          <ConfirmResetPassword
            formState={formState}
            onChange={onChange}
            handleClickShowConfirmPassword={handleClickShowConfirmPassword}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
          />
        )}
        <Box className={classes.footer}>
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
          {(formType === "Reset Password" ||
            formType === "Confirm Reset Password") && (
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
    </Container>
  );
};

export default AuthUser;
