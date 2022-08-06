import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => {

    return {
        error: {
            width: "95%",
            //margin: "10px !important",
            boxSizing: "border-box !important",
          },
        card: {
            width: "50% !important", 
        }, 
        title: {
            textAlign: "center", 
            fontFamily: "Poppins, sans-serif", 
            fontWeight: "600",
            color: `${theme.palette.secondary.main}`
        }, 
        actionButtons: {
            margin: "20px", 
          
        }, 
        cancelBox: {
            display: "flex", 
            justifyContent: "end", 
            width: "100% !important",

        },
        cancel: {
            backgroundColor: "unset !important", 
            color: `${theme.palette.primary.main} !important`,
           
        }, 
        mentorName: {
            color: `${theme.palette.primary.main} !important`
        }, 
        container: {
         height: "auto",
        }
    }
})

export default useStyles