import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
    
return {
    container:{
        display: "flex", 
        maxWidth: "unset !important", 
        padding: "unset !important",
        color: "rgba(124,123,122, 1) !important",
        fontFamily: "Poppins, sans-serif !important",
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
     }, 
    tabPanel:{
        margin: "40px",

    }, 
    header:{
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Poppins, sans-serif !important"
   }, 

    skills: {
        display: "flex", 
        gap: "2%",
        marginTop: "10px",
        marginBottom: "10px",
        alignItems: "baseline", 
    }, 
    topics: {
        display: "flex", 
        gap: "3%", 
        alignItems: "baseline"
    }, 
    reason: {
        fontFamily: "Poppins, sans-serif !important",
    }, 
    chip: {
        fontFamily: "Poppins, sans-serif !important",
        color: "rgba(124,123,122, 1) !important",
    }, 
    title:{
        color: `${theme.palette.secondary.main} !important`
    }
}
})

export default useStyles; 