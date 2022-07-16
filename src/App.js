import { Route } from "react-router-dom";
import "./App.css";
 import "./index.css";
import AnauthLayout from "./Components/Layout/anauthLayout/unauthLayout";
import Home from "./Components/Home";
import { createTheme, ThemeProvider } from "@material-ui/core";
import SlideRoutes from "react-slide-routes";
import AboutUs from "./Components/AboutUs"; 
import FAQs from "./Components/Faqs";
import {Auth} from "aws-amplify"; 
import Testimony from "./Components/Testimony";
import AuthUser from "./Components/AuthUser";
import { useEffect, useState } from "react";


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
  const [user, setUser] = useState(null); 

  const checkUser = async() => {
    try{
      const currentUser = await Auth.currentAuthenticatedUser()
      setUser(currentUser)
      console.log(user)
    }catch(error){
      setUser(null)
    }

  }

  useEffect(() => {
    checkUser()
  })
 
  return (
    <ThemeProvider theme={theme}>
       <AnauthLayout >
        <SlideRoutes animation="vertical-slide">
          <Route exact path="/" element={<Home/>} />
          <Route  path="/aboutus" element={<AboutUs/>} />
          <Route  path="/faqs" element={<FAQs/>} />
          <Route  path="/testimony" element={<Testimony/>} />
          <Route exact path="/Login" element={<AuthUser/>}/>
        </SlideRoutes>
      </AnauthLayout>
 
    </ThemeProvider>
  );
}

export default App;
