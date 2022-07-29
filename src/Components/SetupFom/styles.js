import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    avatar: {
      height: 110,
      width: 110,
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
    uploadButtonBox:{
      display: "flex",
      flexDirection: "row",
      width: "100% !important",
      fontFamily: "Poppins !important",
      justifyContent: "center",
      gap: "2%",
      margin: "5px !important",
    },
    container: {
      width: "100%",
      overflow: "scroll",
    },
    stepWizard: {
      width: "80%",
    },
    error: {
      width: "90%",
      margin: "auto",
    },
    icon: {
      fill: theme.palette.primary.main,
    },
    card: {
      background: "red",
      width: "50%",
      height: "750px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFEFC",
    },
    stepper: {
      width: "80%",
    },
    cardContent: {
      display: "flex",
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
      margin: "10px !important",
    },
    textField: {
      width: "100% !important",
      margin: "10px !important",

    },
    formControl: {
      width: "100% !important",
      fontFamily: "Poppins !important",
      margin: "5px !important",
      //height: "100px", 
    },
    actionButtons: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      marginBottom: "20px",
    },
    prevActionButton: {
      marginRigh: "auto",
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
      "&:hover": {
        backgroundColor: `${theme.palette.primary.main} !important`,
      },
    },
    title: {
      color: theme.palette.secondary.main,
      fontFamily: "Poppins !important",
      fontWeight: "600",
      lineHeight: "45px",
      letterSpacing: "0.05em",
    },
    subtitle:{
        fontFamily: "Poppins",
        fontWeight: "400",

    }
    
  };
});

export default useStyles;
