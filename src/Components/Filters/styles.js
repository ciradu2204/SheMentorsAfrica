import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {

    return {
        form: {
           // backgroundColor: "#F5F5F5", 
            width: "30%",
            height: "100% !important",
            borderRadius: "30px 0px 0px 0px",
            backgroundColor: "#F5F5F5",
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "73px",
            fontFamily: "Poppins, sans-serif !important"
        }, 
        title: {
            fontFamily: "Poppins, sans-serif !important", 
            fontWeight: "600", 
        }, 
        actionButtons:{
            marginTop: "20px", 
            display: "flex", 
            gap: "5%", 
        }, 
        submit: {
            backgroundColor: `${theme.palette.primary.main} !important`,
            color: "white !important"

        }, 
        textField:{
            width: "100% !important",
            marginTop: "15px !important",
            textAlign: "center",
            display: "flex !important", 
            flexDirection: "column !important", 
            justifyContent: "center !important", 
            fontFamily: "Poppins, sans-serif !important"
        },
        icon:{
            color: `${theme.palette.primary.main} !important`,
        },
        label:{
            backgroundColor: "#F5F5F5 !important",
        }, 

    }

})

export default useStyles; 