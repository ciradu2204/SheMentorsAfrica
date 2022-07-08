import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    logoMd: {
      width: "20%",
      [theme.breakpoints.up("md")]: {
        display: "block",
      },
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    logoSm: {
      width: "20%",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
      [theme.breakpoints.down("md")]: {
        display: "block",
      },
    },
    appBar: {
      background: "none",
      boxShadow: "none",
    },
    toolbar: {
      justifyContent: "space-between",
    },
    linksContainer: {
      display: "flex",
      alignItems: "end",

      [theme.breakpoints.up("sm")]: {
        display: "block",
        width: "70%",

       },
      [theme.breakpoints.up("md")]:{
        width: "55%",
      },
    
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },

    },
    menuItem:{
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }, 
        [theme.breakpoints.down("sm")]: {
            display: "block",
        }, 
    },
    links: {
      display: "flex",
      flexGrow: 1,
    },
    link: {
      textAlign: "center !important",
      cursor: "pointer",
      '&:hover': {
        color: theme.palette.primary.main
      },
    },
    authLinks: {
      color: theme.palette.secondary.main,
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
    leftAlign: {
      textAlign: "right !important",
    },
  };
});

export default useStyles;
