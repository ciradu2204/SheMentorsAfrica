import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    logoMdContainer: {
      display: "flex",
      flexBasis: "200px",
      padding: "10px",
      maxWidth: "200px",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
    logoMd: {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
    logoSmContainer: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    logoSm: {
      flex: 1,
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    appBar: {
      background: "none !important",
      boxShadow: "none !important",
    },
    container: {
      maxWidth: "none !important",
      padding: "unset !important",
    },
    toolbar: {
      justifyContent: "space-between",
    },
    nonMobileContainer: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "100px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    linksContainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "flex-end",
      flexGrow: 3,
    },
    links: {
      display: "flex",
      width: "70%",
      gap: "2%",
      justifyContent: "center",
      [theme.breakpoints.down("md")]: {
        display: "1%",
        width: "90%",

      },
    },
    menuItem: {
      [theme.breakpoints.up("xs")]: {
        display: "none !important",
      },
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
    menuIcon: {
      color: theme.palette.primary.main,
      "&.MuiIconButton-root:hover": {
        background: "none",
        borderRadius: 0,
      },
    },

    link: {
      color: "inherit",
      cursor: "pointer",
      position: "relative",
      display: "inline-block",
      fontFamily: "Poppins, sans-serif !important",
      fontWeight: "650",
      fontSize: "15px",
      textAlign: "center !important",
      lineHeight: "20px",
      letterSpacing: "0.15em",
      "&:after": {
        content: '""',
        position: "absolute",
        left: "0",
        top: "100%",
        width: "0%",
        height: "2px",
        margin: "auto",
        backgroundColor: theme.palette.primary.main,
        transition: "width .3s ease-in-out",
      },
      "&:hover:after": {
        width: "100%",
      },
      "&.active:after": {
        width: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "11px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "15px",
      },
    },
    user: {
      display: "flex", 
    },

    AuthButtonBox: {
      flexGrow: 1,
      maxWidth: "200px",
      flexBasis: "200px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]:{
        flexBasis: "unset !important", 
        alignItems: "flex-end",
        width: "100% !important",
        maxWidth: "unset !important",
        justifyContent: "unset",


      }
    },

    authButton: {
      width: "50% !important",
      background: `${theme.palette.primary.main} !important`,
      color: theme.palette.common.white,
      boxShadow:"0px 3px 1px -2px rgb(0 0 0 / 5%), 0px 2px 2px 0px rgb(0 0 0 / 5%), 0px 1px 5px 0px rgb(0 0 0 / 5%)",
      "&:hover": {
        background: theme.palette.primary.main,
        boxShadow:
          "0px 3px 1px -2px rgb(0 0 0 / 5%), 0px 2px 2px 0px rgb(0 0 0 / 5%), 0px 1px 5px 0px rgb(0 0 0 / 5%)",
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main} !important`,
      },
      [theme.breakpoints.down("sm")]: {
        backgroundColor: theme.palette.primary.main,
        width: "100% !important",
      },
    },

    linksMobContainer: {
      display: "flex",
      flexDirection: "column",
    },
    linksMob: {
      paddingTop: 10,
    },
    linkMob: {
      fontWeight: "650",
      fontFamily: "Poppins, sans-serif !important",
      fontSize: "15px",
      lineHeight: "30px",
      letterSpacing: "0.15em",
      justifyContent: "center !important",
      paddingTop: 30,
    },



    drawer: {
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: 240,
      },
    },
    alignRight: {
      justifyContent: "flex-end",
    },
    alignLeft: {
      justifyContent: "flex-start",
    },
    cancelIcon: {
      display: "flex",
       backgroundColor: "none",
      justifyContent: "flex-end !important",
      marginX: 10,
      "&:hover": {
        color: theme.palette.primary.main,
        border: 0,
      },
      "&.MuiIconButton-root:hover": {
        background: "none",
        borderRadius: 0,
      },
    },
    divider: {
      "&.MuiDivider-vertical": {
        width: "1px",
        height: "22px !important",
        alignSelf: "center",
      },
    },
  };
});

export default useStyles;
