import { Container, TextField } from "@material-ui/core"
import useStyles from "../styles"

const Connect  =  ({formik})  =>{
 const classes = useStyles(); 

    return (
        <Container  className={classes.item} disableGutters>
        <TextField name="linkedIn" label="LinkedIn" variant="outlined" onChange={formik.onChange} value={formik.values.connect.linkedIn}/>
        <TextField name="twitter" label="Twitter" variant="outlined" onChange={formik.onChange} value={formik.values.connect.twitter}/>
        <TextField name="personalWebsite" label="Personal Website" variant="outlined" onChange={formik.onChange} value={formik.values.connect.personalWebsite}/>

        </Container>
    )


}

export default Connect