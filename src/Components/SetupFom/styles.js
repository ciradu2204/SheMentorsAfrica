import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    avatar: {
      height: 90,
      width: 90,
      border: `2px solid ${theme.palette.grey[200]}`,
    },
    circleIcon: {
      height: 90,
      width: 90,
      color: "#D9D9D9",
    },
    uploadButton: {
      color: `${theme.palette.secondary.main} !important`,
      textTransform: "none",
      fontWeight: 600,
      "&:hover": {
        borderRadius: "unset !important",
        backgroundColor: "unset !important",
      },
      
    },
    circularProgress: {
      color: `${theme.palette.secondary.main} !important`,
      width: "50px", 
      height: "50px"
    },
    uploadButtonBox: {
      display: "flex",
      flexDirection: "row",
      width: "100% !important",
      fontFamily: "Poppins !important",
      alignItems: "center",
      justifyContent: "center",
      gap: "2%",
      marginTop: "5px !important",
    },
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
    icon: {
      fill: theme.palette.primary.main,
    },
    card: {
      width: "50%",
      height: "750px",
      overflow: "scroll",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFEFC",
    },
    stepper: {
      width: "85%",
    },
    cardContent: {
      width: "100%",
      display: "flex",
      boxSizing: "border-box !important",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
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
    textField: {
      width: "100% !important",
      marginTop: "15px !important",
    },
    formControl: {
      width: "100% !important",
      fontFamily: "Poppins !important",
      marginTop: "15px !important",
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
      padding: "10px",
      letterSpacing: "0.05em",
    },
    subtitle: {
      fontFamily: "Poppins",
      fontWeight: "400",
      padding: "10px",
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
