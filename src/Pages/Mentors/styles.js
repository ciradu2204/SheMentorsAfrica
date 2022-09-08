import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>{
    return {
        container: {
            display: 'flex', 
            maxWidth: 'unset !important', 
            padding: 'unset !important',
            alignCenter: "stretch",
            height: "100%",
            marginLeft: "10px",
        }, 
        profilesBox:{
            display: 'flex', 
            width: '100%',
            flexDirection: 'column', 
        }, 
        pagination:{
            display: "flex", 
            width: "100%",
            flex: 1,
            marginBottom: "30px",
            alignItems: "flex-end",
            justifyContent: "center",
        },
        mentorsBox: {
            paddingTop: "115px",
            paddingLeft: "30px",
            height: "100%",
            flex: 0,
            paddingRight: "30px",
            color: "rgba(124,123,122, 1)",
            display: "grid", 
            justifyContent: "center",
            gridTemplateColumns: "48% 48%",
            rowGap: "10%",
            columnGap:"2%", 
            [theme.breakpoints.down("md")]:{
                gridTemplateColumns: "50%",

            }
        }, 
        circularProgressBox: {
           width: "80%", 
           display: "flex", 
           alignItems: "center",
           justifyContent: "center",
           color: "rgba(124,123,122, 1)",
        },
        mentorsNotFound:{
            height: "100%",
            display: "flex", 
            justifyContent: "center",
            alignItems: "center",
            color: "rgba(124,123,122, 1)",
        },
        info: {
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            gap: "3%",
            width: "100%",
        },  
        mentorCard: {
            padding:"20px",
            border: "1px solid #408FAA",
            borderRadius: "20px",
            height: "fit-content", 
            display: "flex",
            flexDirection: "row",
            background: "#F5F5F5",
            gap: "5%",
        }, 
        avatarBox: {
            display: "flex", 
            alignItems: "center",
        },
        avatar: {
            width: 120, 
            height: 120,
        }, 
        mentorName: {
            fontFamily: "Poppins, sans-serif !important",
            fontWeight: 400,
            letterSpacing: "0.05em",
        },
        roleBox:{
            display: "flex",
            paddingTop: "5px",
            gap: "2%",
        }, 
        locationBox: {
            display: "flex", 
            paddingTop: "5px",
            gap: "2%",
        },
        mentorRole: {
            fontFamily: "Poppins, sans-serif !important",
        }, 
        mentorLocation:{
            fontFamily: "Poppins, sans-serif !important",
        }, 
        viewProfileButton:{ 
            marginTop: "5px",
            width: "fit-content",
            background: `${theme.palette.primary.main} !important`,
            color: "white !important",
         }, 
        summary:{
            display: "flex", 
            flexDirection: "column", 
            gap: "5%",
        }
       
    }
})

export default useStyles