import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    selectors: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flexGrow: 1,
      [theme.breakpoints.down("sm")]: {
        flexDirection: "row",
        paddingBottom: 10,
        alignItems: "end",
    },
    },
    selector: {
      border: "1px solid #D9D9D9 ",
      background: theme.palette.grey[300],
      position: "relative",
      width: 20,
      height: 20,
      borderRadius: "50%",
      margin: 10,
      opacity: 0.6,
      cursor: "pointer",
      transition: "background .3s ease-in-out, opacity .3s ease-in-out",
      "&:hover": {
        background: theme.palette.primary.main,
        opacity: "0.9",
       
      },
    },
    active:{
        border: `2px solid ${theme.palette.primary.main} `,
        position: "relative",
        width: 42,
        height: 42, 
        borderRadius: "50%",
        cursor: "pointer",
        opacity: "0.9",

        " & > $selector ":{
         background: theme.palette.primary.main,
         opacity: 1,
       }
    }

   };
});

export default useStyles;
