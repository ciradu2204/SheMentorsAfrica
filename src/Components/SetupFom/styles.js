import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
   
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    stepWizard: {
      width: "80%",
    },
    error: {
      width: "95%",
      //margin: "10px !important",
      boxSizing: "border-box !important",
    },
    info:{
      width: "95%",
      boxSizing: "border-box !important",
    },
    item: {
      display: "flex",
      flexDirection: "column",
      width: "100% !important",
      fontFamily: "Poppins !important",
      justifyContent: "center",
      gap: "2%",
      marginTop: "15px !important",
    },
   
    card: {
      width: "50%",
      height: "auto",
      overflow: "scroll",
      display: "flex",
      paddingTop: "20px !important",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFEFC",
    },
    stepper: {
      width: "85%",
      padding: "3px !important",
    },
    cardContent: {
      width: "100%",
      display: "flex",
      boxSizing: "border-box !important",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
   
    actionButtons: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      marginBottom: "20px !important",
    },
    prevActionButton: {
      marginRight: "auto",
      color: "white",
      "&:hover": {
        backgroundColor: `${theme.palette.primary.main} !important`,
      },
    },
    nextActionButton: {
      color: "white",
      marginLeft: "auto",
      "&:hover": {
        backgroundColor: `${theme.palette.primary.main} !important`,
      },
    },
    submitActionButton: {
      marginLeft: "auto",
      color: "white",
      backgroundColor: `${theme.palette.primary.main} !important`,
      "&:hover": {
        backgroundColor: `${theme.palette.primary.main} !important`,
      },
    },
    title: {
      color: theme.palette.secondary.main,
      fontFamily: "Poppins !important",
      fontWeight: "600",
       letterSpacing: "0.05em",
    },
    subtitle: {
      fontFamily: "Poppins",
      fontWeight: "400",
     },
    calendar:{
      width: "95% !important",
    }, 
    closeIconBox:{
      width: "100%", 
      display: "flex", 
      justifyContent: "flex-end",
    }, 
    closeIcon:{
      color: `${theme.palette.primary.main} !important`,
      '&:hover':{
        backgroundColor: "unset !important", 
        borderRadius: "unset !important", 
      }
    }
  };
});

export default useStyles;
