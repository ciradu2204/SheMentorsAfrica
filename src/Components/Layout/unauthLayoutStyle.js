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
        flexGrow: 2
      }
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
      [theme.breakpoints.down("md")]:{
        paddingLeft: 15,
    },
      [theme.breakpoints.down("sm")]:{
        paddingLeft: 3,
    }
    },
    socialIcons: {
      paddingRight: 40,
      [theme.breakpoints.down("md")]:{
        paddingRight: 15,
    },
      [theme.breakpoints.down("sm")]:{
          paddingRight: 2,
      }
    },
    socialIcon: {
      paddingLeft: 40,
      color: theme.palette.common.white,
      [theme.breakpoints.down("md")]:{
        paddingLeft: "15px !important" ,
      },
      [theme.breakpoints.down("sm")]:{
        paddingLeft: 2,
    }
    },
  };
});

export default useStyles;
