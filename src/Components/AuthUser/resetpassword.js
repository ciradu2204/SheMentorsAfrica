import { Box, TextField } from "@material-ui/core"
import useStyles from "./styles"
const ResetPassword = ({onChange}) =>{
const classes = useStyles(); 
    return (
        <Box>
        <TextField
          id="Email"
          name="email"
          className={classes.input}
          label="Email"
          onChange={onChange}
          variant="outlined"
          required
        />
      </Box>
    )
}

export default ResetPassword