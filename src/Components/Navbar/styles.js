import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    logoMd: {
      width: "20%",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    logoSm: {
      width: "20%",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
      [theme.breakpoints.down("sm")]: {
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

      [theme.breakpoints.up("lg")]: {
        width: "60%",
      },
      [theme.breakpoints.up("md")]: {
        width: "72%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },

      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    menuItem: {
      [theme.breakpoints.up("xs")]: {
        display: "none",
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
    links: {
      width: "100%",
      display: "flex",
    },

    link: {
      color: "inherit",
      cursor: "pointer",
      justifyContent: "center !important",
      fontFamily: "'Poppins', sans-serif !important",
      fontWeight: "500",
      fontSize: "15px",
      lineHeight: "20px",
      letterSpacing: "0.15em",
      "&:hover": {
        color: theme.palette.primary.main,
      },
      "&.active": {
        color: theme.palette.primary.main,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "11px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "15px",
      },
    },
    linksMob: {
      paddingTop: 10,
    },
    linkMob: {
      fontWeight: "500",
      fontFamily: "'Poppins', sans-serif !important",
      fontSize: "15px",
      lineHeight: "30px",
      letterSpacing: "0.15em",
      justifyContent: "center !important",
      paddingTop: 30,
      color: theme.palette.common.white,
    },

    authLinksBox: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
    },

    authLink: {
      cursor: "pointer",
      fontFamily: "'Poppins', sans-serif !important",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.15em",
      [theme.breakpoints.down("sm")]: {
        color: theme.palette.common.white,
      },
      [theme.breakpoints.up("sm")]: {
        color: theme.palette.secondary.main,
      },
      "&:hover": {
        color: theme.palette.primary.main,
      },
      "&.active": {
        color: theme.palette.primary.main,
      },
      "&.MuiListItem-root": {
        width: "100px",
        padding: "none !important",
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: "11px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },

    drawer: {
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: 240,
      },
    },
    paper: {
      backgroundColor: theme.palette.secondary.main,
    },
    alignRight: {
      justifyContent: "flex-end",
    },
    alignLeft: {
      justifyContent: "flex-start",
    },
    cancelIcon: {
      display: "flex",
      color: "white",
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
