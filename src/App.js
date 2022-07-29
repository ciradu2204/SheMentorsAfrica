import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import "./index.css";
import UnauthLayout from "./Layout/UnauthLayout/unauthLayout";
import Home from "./Pages/Home";
import { createTheme, ThemeProvider } from "@material-ui/core";
import AboutUs from "./Pages/AboutUs";
import FAQs from "./Pages/Faqs";
import { Auth } from "aws-amplify";
import Testimony from "./Pages/Testimony";
import AuthUser from "./Pages/AuthUser";
import AuthLayout from "./Layout/AuthLayout/authLayout";
import { useEffect, useState } from "react";
import Dashboard  from "./Pages/Dashboard";
import Profile from "./Pages/Profile";

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
  overrides: {
    MuiOutlinedInput: {
      root: {
        // Focused state
        "&$focused $notchedOutline": {
          borderColor: "#408FAA", 
        }
    }
  }, 
  MuiInputLabel: {
    root: {
      "&$focused":{
        color: "#408FAA",

      }
    },
  }}
});

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false); 

  const navigate = useNavigate(); 

  const checkUser = async(auth) => {
    try { 
        setLoading(prev => !prev);
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);

        if(auth === "logout"){
          navigate("/login"); 
        }else {
          navigate("/dashboard"); 
        }
    } catch (error) {
      setUser(null);
    }
    setLoading(prev => !prev); 
  }

  useEffect(() => {
    checkUser("dashboard")
    // eslint-disable-next-line
   }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes >
        <Route element={<UnauthLayout user={user} loading={loading} checkUser={checkUser} backdropOpen={backdropOpen} />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/testimony" element={<Testimony />} />
          <Route path="/login" element={<AuthUser checkUser={checkUser} setBackdropOpen={setBackdropOpen} />} />
        </Route>
        <Route element={<AuthLayout user={user} loading={loading} checkUser={checkUser} />}>
          <Route exact path="/dashboard" element={<Dashboard user={user}/>} />
          <Route path="/profile" element={<Profile/>} />

        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;