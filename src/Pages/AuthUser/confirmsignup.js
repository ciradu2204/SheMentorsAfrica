import { Box, TextField } from "@material-ui/core"
import useStyles from "./styles"

const ConfirmSignUp  = ({formState, onChange}) =>{
const classes = useStyles()
    return (

        <Box className={classes.inputContainer}>
        <TextField
          id="Email"
          autoComplete="off"
          className={classes.input}
          label="Email"
          variant="outlined"
          value={formState.email}
          required
        />

        <TextField
          id="code"
          name="code"
          autoComplete="off"
          type="number"
          className={classes.input}
          label="Confirmation Code"
          variant="outlined"
          required
          onChange={onChange}
        />
      </Box>
    )
}

export default ConfirmSignUp