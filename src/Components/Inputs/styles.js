import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {

    return {

         avatar: {
            height: 90,
            width: 90,
            border: `2px solid ${theme.palette.grey[200]}`,
          },
          circleIcon: {
            height: 90,
            width: 90,
            color: "#D9D9D9",
          },
          uploadButton: {
            color: `${theme.palette.secondary.main} !important`,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              borderRadius: "unset !important",
              backgroundColor: "unset !important",
            },
            
          },
          circularProgress: {
            color: `${theme.palette.secondary.main} !important`,
            width: "50px", 
            height: "50px"
          },
          uploadButtonBox: {
            display: "flex",
            flexDirection: "row",
            width: "100% !important",
            fontFamily: "Poppins !important",
            alignItems: "center",
            justifyContent: "center",
            gap: "2%",
            marginTop: "5px !important",
          },
          textField: {
            width: "100% !important",
            marginTop: "15px !important",
          },
          formControl: {
            width: "100% !important",
            fontFamily: "Poppins !important",
            marginTop: "15px !important",
          },
          item: {
            display: "flex",
            flexDirection: "column",
            width: "100% !important",
            fontFamily: "Poppins !important",
            justifyContent: "center",
            gap: "2%",
            marginTop: "15px !important",
          },
          icon: {
            fill: theme.palette.primary.main,
          },
          label:{
            '&.MuiInputLabel-root':{
                backgroundColor: "white !important",
            }
            
          }, 
          labelDashboard:{
            '&.MuiInputLabel-root':{
                backgroundColor: "#F5F5F5 !important",
            }
            
          },

    }

})

export default useStyles;