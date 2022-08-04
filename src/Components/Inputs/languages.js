import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";
const Language = ({ formik, hasError,  required=true }) => {
  const classes = useStyles();

  const Languages = [
    "Zulu",
    "Yoruba",
    "Xhosa",
    "Wolof",
    "Venda",
    "Umbundu",
    "Twi",
    "Tswana",
    "Tsonga",
    "Tsoa",
    "Tshivenda",
    "Tshiluba",
    "Tonga",
    "Tigrinya",
    "Tamil",
    "Swazi",
    "Swahili",
    "Spanish",
    "Southern Ndebele",
    "Somali",
    "Shona",
    "Seychellois Creole",
    "Sesotho",
    "Sepedi",
    "Sena",
    "Portuguese",
    "Oromo",
    "Northern Sotho",
    "Northern Ndebele",
    "Noon",
    "Ndebele",
    "Ndau",
    "Nambya",
    "Mossi",
    "Mauritian Creole",
    "Malagasy",
    "Luo",
    "Luganda",
    "Lingala",
    "Khoekhoe",
    "Kongo",
    "Kituba",
    "Kirundi",
    "Kinyarwanda",
    "Kimbundu",
    "Italian",
    "Igbo",
    "Hausa",
    "Gikuyu",
    "German",
    "Ga",
    "Fulani",
    "French",
    "Fon",
    "English",
    "Dangme",
    "Chewa",
    "Comorian",
    "Cape Verdean Creole",
    "Bhojpuri",
    "Berber",
    "Arabic",
    "Amharic",
    "Akan",
    "Afrikaans",
    "Abron",
  ];
  return (
    <FormControl
      variant="outlined"
      fullWidth
      className={classes.formControl}
      required={required}
    >
      <InputLabel  id="languages-label">
        Languages
      </InputLabel>
      <Select
        size="large"
        labelId="languages-label"
        id="select-languages"
        name="languages"
        multiple
        error={hasError.languages}
        value={formik.values.languages}
        label="Languages"
        onChange={formik.handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        inputProps={{
          classes: {
            icon: classes.icon,
          },
        }}
      >
        {Languages.sort().map((language) => (
          <MenuItem key={language} value={language}>
            {language}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Language;
