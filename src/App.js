import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import "./index.css";
import UnauthLayout from "./Layout/UnauthLayout/unauthLayout";
import Home from "./Pages/Home";
import { createTheme, ThemeProvider } from "@material-ui/core";
import AboutUs from "./Pages/AboutUs";
import FAQs from "./Pages/Faqs";
import { Auth, Hub } from "aws-amplify";
import Testimony from "./Pages/Testimony";
import AuthUser from "./Pages/AuthUser";
import AuthLayout from "./Layout/AuthLayout/authLayout";
import { useEffect, useState } from "react";
import { Dashboard } from "@material-ui/icons";

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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const checkUser = async() => {
    try { 
        setLoading(prev => !prev);
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);
        navigate("/dashboard"); 
    } catch (error) {
      setUser(null);
    }
    setLoading(prev => !prev); 
  }

  useEffect(() => {
    checkUser()
   }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes >
        <Route element={<UnauthLayout user={user} loading={loading}  />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/testimony" element={<Testimony />} />
          <Route path="/login" element={<AuthUser  />} />
        </Route>
        <Route  element={<AuthLayout user={user} loading={loading} />}>
          <Route exact path="/dashboard" element={<Dashboard/>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;