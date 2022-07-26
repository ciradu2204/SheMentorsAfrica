import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => {
    return{
       container:{
          maxWidth: "none !important",
          padding: "unset !important"
        }, 
        loading:{
            display: "flex",
            justifyContent: "center", 
            alignItems:"center", 
            width: "100% !important", 
            height: "100vh !important"
           }

    }

})

export default useStyles; 