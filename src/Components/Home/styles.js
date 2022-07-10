import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {

    return {
       
        container:{
            display: "flex", 
            alignItems: "center !important",
            height: "100%", 
            width: "100%",
            margin: "0px !important",
            paddingLeft: 0, 
            [theme.breakpoints.down("xs")]:{
                flexDirection: "row",
                justifyContent: "center",
            }
        },
        homeImgBox:{
            display: "flex", 
            alignItems: "center",
            width: "40%",
            [theme.breakpoints.down("sm")]:{
                width: "30%",
            }, 
            [theme.breakpoints.down("xs")]:{
             display: "none"
            }, 
           
        }, 
        homeImg:{
            width: "100%", 
             
        }, 
        info:{
            width: "60%",
            textAlign:"center",
            justifySelf: "center",
            [theme.breakpoints.down("sm")]:{
                width: "70%",
                alignSelf: "center",
                display: "flex",
                textAlign: "center",
                marginRight: "15px",
                alignItems: "center",
                flexDirection: "column",

            },
            [theme.breakpoints.down("xs")]:{
                width: "90%",
                justifySelf: "center",
                paddingRight: "0px",
                marginRight: "0",
                alignItems: "center",

            }

        }, 
        header:{
             color: theme.palette.secondary.main,
             fontSize: "40px",
             lineHeight: "60px",
             fontFamily: "'Poppins', sans-serif !important",
             margin:20,
             letterSpacing: "0.1em",
             fontWeight: "600",
             [theme.breakpoints.down("md")]:{
                fontSize: "30px"
              },
             [theme.breakpoints.down("sm")]:{
                 fontSize: "25px"
            }

        }, 
        body:{
            fontWeight: "400",
            fontSize: "19px",
            lineHeight: "32px",
            fontFamily: "'Poppins', sans-serif !important",
            textAlign: "center",
            letterSpacing: "0.05em",
         
            [theme.breakpoints.down("xs")]:{
                 width: "100%",
            }

        },
        homeButton:{
            margin: 30,
            width: "150px",
            height: "50px",
            fontFamily: "'Poppins', sans-serif !important",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight:"36px",
            letterSpacing: "0.1em",
        }, 
        dot:{
            color: theme.palette.primary.main,
        },
        buttonLink:{
            textDecoration: "none !important",
        } 

    }

})

export default useStyles; 