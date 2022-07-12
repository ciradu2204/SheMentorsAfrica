import { Route } from "react-router-dom";
import "./App.css";
 import "./index.css";
import AnauthLayout from "./Components/Layout/unauthLayout";
import Home from "./Components/Home";
import { createTheme, ThemeProvider } from "@material-ui/core";
import SlideRoutes from "react-slide-routes";
import AboutUs from "./Components/AboutUs"

const theme = createTheme({
  palette: {
    primary: {
      main: "#E49433",
    },
    secondary: {
      main: "#408FAA",
    },
    error: {
      main: "#FE0000",
    },
  },
});

function App() {
 
  return (
    <ThemeProvider theme={theme}>
      <AnauthLayout>
        <SlideRoutes animation="vertical-slide">
          <Route exact path="/" element={<Home/>} />
          <Route  path="/aboutus" element={<AboutUs/>} />

        </SlideRoutes>
      </AnauthLayout>
    </ThemeProvider>
  );
}

export default App;
