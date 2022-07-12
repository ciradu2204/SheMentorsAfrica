import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      maxWidth: "unset",
      alignItems: "center",
      height: "100% !important",
      gap: "10%",
      padding: 0,
      [theme.breakpoints.down("xs")]:
      {
         justifyContent: "center", 
         flexDirection: "column",
         alignItems: "center", 

      }
    },
    ImgContainer: {
      width: "40%",

      [theme.breakpoints.down("xs")]:
      {
           display: "none",
      }
    },
    faqContent: {
      width: "40%",
      [theme.breakpoints.down("sm")]:
      {
           width: "70%",
           marginRight: "10%",
      },
      [theme.breakpoints.down("xs")]:
      {
           width: "80%",
      },
     
    },
    faqImg: {
      width: "100% !important",
    },
    faqTitle: {
      color: theme.palette.secondary.main,
      fontFamily: "Poppins, sans-serif !important",
      fontWeight: 700,
      lineHeight: "45px",
      letterSpacing: "0.05em",
      [theme.breakpoints.down("xs")]:{
        textAlign: "center"
      }
    },
    faqBody: {
      fontFamily: "Poppins, sans-serif !important",
      fontWeight: 400,
      lineHeight: "32px",
      textAlign: "center",
      letterSpacing: "0.05em",
      
    },
    header:{
      display: "none", 
      fontWeight: 600, 
      lineHeight: "38px",
      fontFamily: "Poppins, sans-serif !important",
      textAlign: "center", 
      color: theme.palette.common.black,
      fontSize: "25px", 
      marginBottom: "20px",
      [theme.breakpoints.down("xs")]:{
        display: "block"
      }
    }, 
    span:{
     color: theme.palette.secondary.main
    }, 
    faqHr: {
      border: `1px solid ${theme.palette.secondary.main}`,
      backgroundColor: theme.palette.secondary.main,
    },
  };
});

export default useStyles;
