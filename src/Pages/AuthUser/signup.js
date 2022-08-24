import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@material-ui/core"
import { Visibility, VisibilityOff } from "@material-ui/icons"
import useStyles from "./styles"

const SignUp = ({formState, onChange, handleClickShowPassword, handleClickShowConfirmPassword , handleMouseDownPassword}) =>{
    const classes = useStyles()
  return (
    <Box className={classes.inputContainer}>
    <TextField
      id="User Name"
      autoComplete="off"
      label="Full Name"
      className={classes.input}
      name="name"
      variant="outlined"
      required
      onChange={onChange}
      type="String"
    />
    <TextField
      id="Email"
      autoComplete="off"
      label="Email"
      name="email"
      variant="outlined"
      className={classes.input}
      required
      onChange={onChange}
      type="email"
    />
    <FormControl variant="outlined" required className={classes.input}>
      <InputLabel htmlFor="password">Password</InputLabel>
      <OutlinedInput
        id="password"
        autoComplete="off"
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
    <FormControl variant="outlined" required className={classes.input}>
      <InputLabel htmlFor="Confirm Password">
        Confirm Password
      </InputLabel>
      <OutlinedInput
        id="Confirm password"
        autoComplete="off"
        type={formState.showConfirmPassword ? "text" : "password"}
        name="confirmPassword"
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowConfirmPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {formState.showConfirmPassword ? (
                <VisibilityOff />
              ) : (
                <Visibility />
              )}
            </IconButton>
          </InputAdornment>
        }
        label="Confirm Password"
      />
    </FormControl>
  </Box>
  )
}

export default SignUp