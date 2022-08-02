import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>{

    return {
        container: {
         padding: 0, 
         maxWidth: "unset",
         fontFamily: "Poppins !important",
         marginTop: "4px", 
         height: "100% !important",
        },
        header: {
            background: theme.palette.secondary.main, 
            width: "100%",
            display: "flex", 
            flexDirection: "column",
            gap: "12%",
            color: `${theme.palette.common.white}`,
            height: "300px", 
            boxShadow: "0px 2px 4px rgba(16, 24, 40, 0.15)",
            borderRadius: "30px 0px 0px 0px",
        }, 
        icons: {
            display: "flex", 
            width: "100%",
            marginTop: "10px",
            justifyContent: "space-between", 
            color: `${theme.palette.common.white} !important`, 
        },
        back:{
            color: `${theme.palette.common.white} !important`,
            marginLeft: "20px" ,
            '&:hover':{
                background: "unset !important",
                borderRadius: "unset"
            }
        },
        edit: {
            color: `${theme.palette.common.white} !important`, 
            textTransform: "none",
            fontWeight: "500", 
            marginRight: "20px",
            '&:hover':{
                background: "unset !important",
                borderRadius: "unset"
            }
        }, 
        contentParent:{
            display: "flex",
            gap: "10%",
            justifyContent: "center"
        },
        name: {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: "500",
            lineHeight: "30px",
            letterSpacing: "0.15em",

        },
        title: {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: "500",
            lineHeight: "30px",
            paddingTop: "20px",
            letterSpacing: "0.15em",
        }, 
        avatar: { 
            width : 250, 
            height: 250,
        }, 
        content:{
            display: "flex",
            flexDirection: "column",
        },
        experience:{
        width: "100% !important",
        display: "flex",
        paddingTop: "20px", 

        },
        experienceBox: {
            display: "flex", 
            width: "100% !important",
            alignItems: "center",
            gap: "3%", 
        },
        body: {
            width: "100%",
           marginTop: "80px",
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
           marginLeft: "30px",
        },
        pannelRoot:{
            marginLeft: "30px !important",
        },
        tabRoot:{
            color: `${theme.palette.secondary.main} !important`,
            fontFamily: "Poppins !important",
            textTransform: 'none !important',
            fontSize: '16px !important',
            fontWeight: '600 !important',
            '&.Mui-selected':{
                color: `${theme.palette.primary.main} !important`,

            }
        },
        bookButtonBox:{
           paddingTop: "50px",
        },
        bookButton:{
           backgroundColor: `${theme.palette.primary.main} !important`, 
           color: "white",
           padding: "10px",
           width: "35% !important",
           borderRadius: "15px",
        },
        aboutMe:{
            marginTop: "10px !important",
            padding: "unset !important",
            maxWidth: "unset", 
            display: "flex",
            gap: "5%",
            fontFamily: "Poppins,sans-serif !important",

        }, 
        cardContent: {
            display:"flex", 
            gap: "5%",
            flexWrap: "wrap !important",
        },
        carcardContainerLeft: {
            width: "30%", 
            marginBottom: "20px",
        }, 
        cardContainerRight: {
            width: "70%", 
            marginBottom: "20px",
        },
        card:{
            marginBottom: "10px",
            color: "rgba(124,123,122, 1)",
            borderRadius: "10px 10px 10px 10px",
            flexWrap: "wrap",
            flexBasis: 0, 
            flexGrow: 1, 
        }, 
        aboutMeTitle: {
            color: `${theme.palette.secondary.main}`, 
            marginTop: "20px",
            marginLeft: "20px",
            fontWeight: "600", 
            fontFamily: "Poppins,sans-serif !important",

        },
        bio:{
            marginBottom: "10px",
            color: "rgba(124,123,122, 1)",
            borderRadius: "10px 10px 10px 10px",
        },
        chip:{
            fontFamily: "Poppins,sans-serif !important",
            color: "rgba(124,123,122, 1) !important",
            marginBottom: "5%",
        }, 
        connectIcon:{
            borderRadius: "50%", 
            color: "black !important",
            backgroundColor: "rgba(124,123,122, 0.2)",
        }, 
        flex: {
            display: "flex",
            gap: "2%",
        }

    }

}); 
export default useStyles; 