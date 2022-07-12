import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    parent: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      height: "100vh !important",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      flexGrow: 2,
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },

    childrenBox: {
      width: "95%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        flexGrow: 2,
      },
    },
    partnersContainer: {
      display: "flex",
      flexDirection: "row", 
      alignItems: "center",
      border: `1px solid ${theme.palette.grey[400]}`,
      borderTopLeftRadius: "25px", 
      borderTopRightRadius: "25px"
    }, 

    partnersInfoBox: {
      flexGrow: 1,
    },
    partnerTitle: {
      textAlign: "center",
      fontFamily: "Poppins, sans serif",
      fontWeight: "700",
      color: theme.palette.secondary.main,
      margin: "10px !important",
    },
    partnersBox: {
      display: "flex",
      justifyContent: "space-around",
      marginBottom: "30px",
    },
    partner: {
      maxWidth: "400px",
      height: "80px",
    },
    footer: {
      display: "flex",
      justifySelf: "end",
      width: "100%",
      flexDirection: "row",
      borderRadius: "5px 5px 0 0",
      justifyContent: "space-between",
      alignItems: "center",
      height: 50,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    copyright: {
      paddingLeft: 30,
      [theme.breakpoints.down("md")]: {
        paddingLeft: 15,
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: 3,
      },
    },
    socialIcons: {
      paddingRight: 40,
      [theme.breakpoints.down("md")]: {
        paddingRight: 15,
      },
      [theme.breakpoints.down("sm")]: {
        paddingRight: 2,
      },
    },
    socialIcon: {
      paddingLeft: 40,
      color: theme.palette.common.white,
      borderRadius: "unset",

      "&:hover": {
        backgroundColor: "unset",
      },

      [theme.breakpoints.down("md")]: {
        paddingLeft: "15px !important",
      },
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "2px !important",
      },
    },
  
    carouselIcons: {
      fontSize: "20px",
      [theme.breakpoints.up("md")]:{
       display: "none",
      }
    }
  };
});

export default useStyles;
