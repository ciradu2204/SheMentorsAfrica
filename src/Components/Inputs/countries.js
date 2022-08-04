import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core"
import useStyles from "./styles";

const Country = ({formik, hasError, required=true, label="label", focused=false}) => {
    const classes = useStyles(); 
    const labelString = `classes. + ${label}`
    const countries = [
        "Algeria",
        "Egypt",
        "Libyan Arab Jamahiriya",
        "Morocco",
        "Tunisia",
        "Western Sahara",
        "Burundi",
        "Comoros",
        "Djibouti",
        "Eritrea",
        "Ethiopia",
        "Kenya",
        "Madagascar",
        "Malawi",
        "Mauritius",
        "Mayotte",
        "Mozambique",
        "Réunion",
        "Rwanda",
        "Somalia",
        "Sudan ",
        "Uganda",
        "United Republic of Tanzania",
        "Zambia",
        "Zimbabwe",
        "Angola",
        "Cameroon",
        "Central African Republic",
        "Chad",
        "Congo",
        "Democratic Republic of the Congo",
        "Equatorial Guinea",
        "Gabon",
        "Sao Tome and Principe",
        "Botswana",
        "Lesotho",
        "Namibia",
        "South Africa",
        "Swaziland",
        "Benin",
        "Burkina Faso",
        "Cape Verde",
        "Côte d'Ivoire",
        "Gambia",
        "Ghana",
        "Guinea",
        "Guinea-Bissau",
        "Liberia",
        "Mali",
        "Mauritania",
        "Niger",
        "Nigeria",
        "Senegal",
        "Sierra Leone",
        "Togo",
    ]
    return (

        <FormControl variant="outlined" fullWidth  className={classes.formControl} required={required} focused={focused}>
        <InputLabel  id="country-label" classes={{
                 root: label === "label" ? classes.label: classes.labelDashboard
        }}>Country</InputLabel>
        <Select
          labelId="country-label"
          id="select-country"
          name="country"
          value={formik.values.country}
          label="Country"
          error={hasError.country}
          onChange={formik.handleChange}
          inputProps={{
            classes: {
                icon: classes.icon,
 
            },
        }}
        >
        {countries.sort().map((country) =>(
            <MenuItem key={country} value={country}>{country}</MenuItem>
        ))}
        </Select>
      </FormControl>
    )

}

export default Country; 