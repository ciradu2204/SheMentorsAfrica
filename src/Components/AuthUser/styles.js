import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: "url(https://shementorsafrica-img.s3.amazonaws.com/auth-sample1.png)",
      backgroundRepeat: "no-repeat",
      maxWidth: "unset !important", 
      padding: "none",
      backgroundSize: "auto 250px",
      backgroundPosition: "left top",
    },
    card: {
      width: "45%",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      border: `1px solid ${theme.palette.secondary.main}`,
      [theme.breakpoints.down("md")]:{
        width: "50%",

      },
      [theme.breakpoints.down("xs")]:{
        width: "95%",

      }
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
    },
    input: {
      marginLeft: "15px !important",
      marginBottom: "10px !important",
      width: "94% !important",
      marginTop: "5px !important",
      marginRight: "15px !important",
      fontFamily: "Poppins, sans-serif !important",
    },
    authButton: {
      width: "100% !important",
      marginTop: 5,
      backgroundColor: `${theme.palette.primary.main} !important`,
      color: `${theme.palette.common.white} !important`,
    },
   
    googleAuthenticateButton: {
      fontFamily: "Poppins, sans-serif !important",
      marginTop: 10,
      width: "95% !important",
      marginBottom: 10,
    },
    formType: {
      fontFamily: "Poppins, sans-serif !important",
      fontWeight: "600",
      lineHeight: "45px",
    },
    subtitle: {
      margin: "5px",
      width: "100%",
      fontFamily: "Poppins, sans-serif !important",
      fontWeight: "300",
      lineHeight: "20px",
    },
    forgotPassword: {
      fontFamily: "Poppins, sans-serif !important",
      textAlign: "end !important",
      fontWeight: "600",
      display: "flex",
      justifyContent: "flex-end",
      textTransform: "none",
      fontSize: "13px",
      color: theme.palette.primary.main,
      width: "100%",

      "&:hover": {
        backgroundColor: "unset !important",
      },
  }, 
  resendCode:{
    fontFamily: "Poppins, sans-serif !important",
    textAlign: "end !important",
    fontWeight: "600",
    display: "flex",
    justifyContent: "flex-end",
    textTransform: "none",
    fontSize: "13px",
    color: theme.palette.primary.main,
    width: "100% !important",

    "&:hover": {
      backgroundColor: "unset !important",
    },
  },
  footer:{
      width: "93%",
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 15,
      alignSelf: 'center'
  },
  header: {
    marginTop: 5,
  },
  changeState:{
    width: "100%",
    marginTop: "10px",
    fontSize: "13px !important ", 
    justifyContent: "flex-start",
    fontFamily: "Poppins, sans-serif !important",
    display: "flex",
    alignItems: "baseline"
  },
  goToSignUpButton: {
    fontSize: "13px !important ", 
    textTransform: "none",
    fontFamily: "Poppins, sans-serif !important",
    fontWeight: "600",
    color: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: "unset !important",
      },

   }, 
   divider: {
    backgroundColor: "unset",
    width: "93% !important", 
    padding: 10,
    margin: "auto !important",
    "& span":{
        alignSelf: "center"
    }
   },
   alert: {
       marginLeft: "15px",
       marginRight: "15px"
   }, 
   checklist:{
     width: "100%",
     display: "grid", 
     gridTemplateColumns: "50%  50%",
     columnGap: "20px",
     fontSize: "13px",
     fontFamily: "Poppins, sans-serif",

     [theme.breakpoints.down("xs")]:{
       gridTemplateColumns: "100%",
     }

   }, 
   backdrop:{
     color: '#fff',
     zIndex: theme.zIndex.drawer + 100
   }
}});

export default useStyles;
