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
    info:{
      main: "#408FAA",
    }
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
      backgroundColor: "white",
      "&$focused":{
        color: "#408FAA",
        backgroundColor: "white",

      }
    },
  }}
});

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const getCurrentUser = async () => {
    try {
      return await Auth.currentAuthenticatedUser()
    } catch {
      // currentAuthenticatedUser throws an Error if not signed in
      return null
    }
  }

  useEffect(() => {
    const updateUser = async (data) => {
      setLoading(true)
      setUser(await getCurrentUser())
      setLoading(false)
    }
    Hub.listen('auth', async(data) => {
      setLoading(true)
      setUser(await getCurrentUser())
      if(data.payload.event === "signIn"){
        navigate("/dashboard")
      }else if(data.payload.event === "signOut"){
        navigate("/login")
        setLoading(false)
      }
    }) 
    updateUser() 
    navigate('/dashboard')
    return () => Hub.remove('auth', updateUser)
    // eslint-disable-next-line
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Routes >
        <Route element={<UnauthLayout user={user} loading={loading}  />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/testimony" element={<Testimony />} />
          <Route path="/login" element={<AuthUser />} />
        </Route>
        <Route element={<AuthLayout user={user} loading={loading} setLoading={setLoading} />}>
          <Route exact path="/dashboard" element={<Dashboard user={user}/>} />
          <Route path="/profile" element={<Profile/>} />

        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;