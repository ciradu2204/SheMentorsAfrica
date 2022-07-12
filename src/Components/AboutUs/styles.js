import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      height: "100%",
      maxWidth: "unset",
      flexDirection: "column",
    },
    cardBox: {
      display: "flex",
      flexGrow: 2,
      justifyContent: "center",
      width: "100%",
      backgroundImage: "url(https://shementorsafrica-img.s3.amazonaws.com/AboutUs.png) ",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0% 0%",
      backgroundSize: "auto 250px",
      alignItems: "center !important",
      "& :nth-child(2)": {
        alignSelf: "flex-end",
      },

      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    card: {
      display: "flex",
      flexDirection: "column",
      justifySelf: "center",
      width: "20%",
      margin: 30,
      padding: 10,
      height: 250,
      border: `solid 1px ${theme.palette.secondary.main} `,
      

      [theme.breakpoints.down("md")]: {
        width: "50%",
        margin: 20,
      },

      [theme.breakpoints.down("sm")]: {
        width: "60%",
        margin: 10,
        height: 250,
      },
    },
    title: {
      flexGrow: 1, 
      textAlign: "center",
      display: "flex", 
      justifyContent:"center",
      alignItems: "center",
      lineHeight: "45px",
      letterSpacing: "0.05em",
      fontFamily: "Poppins, sans serif !important",
      fontWeight: "600",
      color: theme.palette.secondary.main,
      margin: 5,
    },
    body: {
      flexGrow: 2, 
 
      fontWeight: "400",
      textAlign: "center",
      letterSpacing: "0.05em",
      fontFamily: "Poppins, sans serif !important",
      lineHeight: "25px",
    }
  };
});

export default useStyles;
