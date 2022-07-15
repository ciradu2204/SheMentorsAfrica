import { Route } from "react-router-dom";
import "./App.css";
 import "./index.css";
import AnauthLayout from "./Components/Layout/anauthLayout/unauthLayout";
import Home from "./Components/Home";
import { createTheme, ThemeProvider } from "@material-ui/core";
import SlideRoutes from "react-slide-routes";
import AboutUs from "./Components/AboutUs"; 
import FAQs from "./Components/Faqs";
import Testimony from "./Components/Testimony";
import Auth from "./Components/Auth";
import { useState } from "react";


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
  const [loading, SetLoading] = useState(false)
  const changeLoadingState =() =>{
    SetLoading(!loading); 
  }
 
  return (
    <ThemeProvider theme={theme}>
       <AnauthLayout open={loading}>
        <SlideRoutes animation="vertical-slide">
          <Route exact path="/" element={<Home/>} />
          <Route  path="/aboutus" element={<AboutUs/>} />
          <Route  path="/faqs" element={<FAQs/>} />
          <Route  path="/testimony" element={<Testimony/>} />
          <Route exact path="/Login" element={<Auth setLoading={changeLoadingState}/>}/>
        </SlideRoutes>
      </AnauthLayout>
 
    </ThemeProvider>
  );
}

export default App;
