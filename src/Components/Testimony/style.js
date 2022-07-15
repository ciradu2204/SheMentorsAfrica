import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>{

    return {
        container: {
            display: "flex",
            flexDirection: "row",
            height: "100%",
            padding: "unset", 
            maxWidth: "unset",
            justifyContent: "center",
             alignItems: "center",
             backgroundImage: "url(https://shementorsafrica-img.s3.amazonaws.com/auth-sample2.png)",
             backgroundRepeat: "no-repeat",
             backgroundSize: "auto 250px",
             backgroundPosition: "left top",
            gap: "12%",
            [theme.breakpoints.down("sm")]:{
                gap: "2%",
                backgroundSize: "35% auto" , 


             },
            [theme.breakpoints.down("xs")]:{
                gap: "unset !important",

             }
        },
        testimony:{
          width: "30%",
          height: "300px",
          zIndex: "-2 !important",
          position: "relative" ,
          display: "flex", 
          justifyContent: "center", 
          flexDirection: "column",
          padding: 20,
          border: `solid 1px ${theme.palette.secondary.main} `,

          [theme.breakpoints.down("sm")]:{
            width: "90%", 
            height: "350px"
         },
          [theme.breakpoints.down("xs")]:{
             width: "90%", 
             height: "350px"
          }
        }, 
        role:{
            position: "absolute",
            zIndex: "-4 !important",
            right: "20px", 
            top: "-1px",
            fontFamily: 'Poppins, sans-serif !important',
            fontWeight: "600",
            lineHeight: "30px",
            letterspacing: "0.1em",
            padding: "10px",
            backgroundColor: theme.palette.secondary.main, 
            color: theme.palette.common.white
        }, 
        body: {
            fontFamily: 'Poppins, sans-serif !important',
            fontWeight: "400",
            lineHeight: "30px",
            letterSpacing: "0.1em",
        },
        usersInfo:{
            display: "flex",
            alignItems: "center", 
            marginTop: "15px"
        }, 
        testimonyImg:{
            width: "50px", 
            height: "50px",
            marginRight :10
        },
        subtitle: {
            fontWeight: 600,
            lineHeight: "34px",
            fontFamily: "poppins, sans-serif !important",
            letterSpacing: "0.1em",
        },
        subtitle2: {
            fontWeight: 400,
            fontFamily: "poppins, sans-serif !important",
            lineHeight: "34px",
            letterSpacing: "0.1em",
        }, 
        carouselIcon: {
            transform: "scale(2) !important",
            color: `${theme.palette.primary.main} !important`, 
            borderRadius: "unset !important", 
            "&:hover":{
                backgroundColor: "unset !important",
            }
        }

    }

})

export default useStyles; 