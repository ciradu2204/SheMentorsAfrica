import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => {
  return {
    parent: {
      maxWidth: "none !important",
      //padding: "unset !important",
      paddingLeft: "50px",
      paddingRight: "unset !important",
      boxSizing: "borderBox",
      display: "flex",
      flexDirection: "column",
      height: "98vh !important",
    },

    backdrop: {
      color: "#fff",
      position: "absolute",
      zIndex: `${theme.zIndex.drawer}   !important`,
    },
    navbar: {
      flexGrow: 1,
    },
    childrenBox: {
      maxWidth: "none !important",
      padding: "unset !important",
      position: "relative",
      bottom: "10px",
      background: "rgba(245, 245, 245, 0.3)",
      boxShadow: "0px 2px 4px rgba(16, 24, 40, 0.15)",
      borderRadius: "30px 0px 0px 30px",
      flexGrow: 2,
    },
    loading: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100% !important",
      height: "100vh !important",
    },
  };
});

export default useStyles;
