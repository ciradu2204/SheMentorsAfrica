import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@material-ui/core"
import { Visibility, VisibilityOff } from "@material-ui/icons"
import useStyles from "./styles"

const SignIn = ({formState, onChange, handleClickShowPassword, handleMouseDownPassword})  => {
const classes = useStyles(); 
    return (

        <Box className={classes.inputContainer}>
        <TextField
          id="Email"
          name="email"
          label="Email"
          className={classes.input}
          variant="outlined"
          required
          onChange={onChange}
          type="email"
        />

        <FormControl variant="outlined" required className={classes.input}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={formState.showPassword ? "text" : "password"}
            name="password"
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {formState.showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>
    )

}

export default SignIn