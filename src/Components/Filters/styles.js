import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {

    return {
        form: {
            width: "30%",
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center",
            padding: "20px" ,
            borderRadius: "30px 0px 0px 0px",
            background: (props => `${props.page? "#F5F5F5 !important": "white !important"}`),
            paddingTop: "73px",
            fontFamily: "Poppins, sans-serif !important",
            [theme.breakpoints.down("sm")]:{
               width: "100%"
            }
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
        filterButton: {
            width: "100% !important", 
            maxWidth: "300px !important", 
            margin: "auto", 
            backgroundColor: `${theme.palette.primary.main} !important`, 
            color: "white !important", 
        },
        item:{
            display: "flex",
            maxWidth: "300px !important", 
            flexDirection: "column",
            fontFamily: "Poppins !important",
            justifyContent: "center",
            gap: "2%",
            marginTop: "15px !important",
        },
        icon:{
            color: `${theme.palette.primary.main} !important`,
        },
        label:{
            backgroundColor: (props => `${props.page? "#F5F5F5 !important": "white"}`),
        }, 

    }

})

export default useStyles; 