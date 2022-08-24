import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import useStyles from "./styles";

const ConfirmResetPassword = ({
  formState,
  onChange,
  handleClickShowPassword,
  handleMouseDownPassword,
  handleClickShowConfirmPassword,
}) => {
  const classes = useStyles();
  return (
    <Box>
      <TextField
        id="Email"
        autoComplete="off"
        className={classes.input}
        label="Email"
        value={formState.email}
        variant="outlined"
      />

      <TextField
        id="code"
        name="code"
        type="number"
        autoComplete="off"
        className={classes.input}
        label="Confirmation Code"
        variant="outlined"
        required
        onChange={onChange}
      />

      <FormControl variant="outlined" required className={classes.input}>
        <InputLabel htmlFor="New Password">New Password</InputLabel>
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
                {formState.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="New Password"
        />
      </FormControl>
      <FormControl variant="outlined" required className={classes.input}>
        <InputLabel htmlFor="Confirm New password" >
          Confirm New Password
        </InputLabel>
        <OutlinedInput
          id="Confirm New password"
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
          label="Confirm New password"
        />
      </FormControl>
    </Box>
  );
};

export default ConfirmResetPassword;
