import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
    
return {
    container:{
        display: "flex", 
        maxWidth: "unset !important", 
        padding: "unset !important"

    },
    tabListdivider:{
        borderColor: `${theme.palette.primary.main} `,
        borderBottom: "1",
    }, 
    indicator: {
        backgroundColor: `${theme.palette.primary.main} !important`,
        textAlign: "center",
     },
    tabsRoot: {
       height:"100vh !important",
       borderRadius: "35px 0 0 0", 
       backgroundColor: "#F5F5F5",
       borderRight: "1px solid  rgba(124,123,122, 0.3) !important", 
    },
    pannelRoot:{
        marginLeft: "30px !important",
    },
    tabRoot:{
        marginTop: "30px",
        color: `${theme.palette.secondary.main} !important`,
        fontFamily: "Poppins !important",
        textTransform: 'none !important',
        fontSize: '16px !important',
        fontWeight: '600 !important',
        '&.Mui-selected':{
            color: `${theme.palette.primary.main} !important`,

        }
    },
    tabs: {
        flexGrow: 0, 
    }, 
    tabPanel:{
        marginTop: "40px",
        flexGrow: 2, 

    }
    
}
})

export default useStyles; 