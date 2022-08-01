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
import { API, Storage } from 'aws-amplify';


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
  },
}});

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 
  const [profile, setProfile] = useState(null)
  const [url, setUrl] = useState("")

  const getCurrentUser = async () => {
    try {
      return await Auth.currentAuthenticatedUser()
    } catch {
      // currentAuthenticatedUser throws an Error if not signed in
      return null
    }
  }

  const checkUserProfile = () => {
    const token = user.signInUserSession.idToken.jwtToken;
    const requestInfo = {
      headers: {Authorization: token}, 
    }
    API.get('profileApi', `/profiles/${user.attributes.sub}`, requestInfo).then((result) => {
      let profile = JSON.parse(result.body)
      setProfile(profile);
    }).catch(err => {
      console.log(err);
    })
   }


  const getImage = async() => {
    console.log(profile.profile?.profileImage.file.key);
    const result = await Storage.get(profile.profile?.profileImage.file.key, {level: "protected", expires: "604800"});
    setUrl(result)
  }

  useEffect(() => {
    if(user == null ){
      const updateUser = async () => {
        setLoading(true)
        setUser(await getCurrentUser())
        setLoading(false)
      }
      Hub.listen('auth', async(data) => {
        setLoading(true)
        setUser(await getCurrentUser())
        if(data.payload.event === "signIn"){
          navigate("/dashboard")
          setLoading(false)
        }else if(data.payload.event === "signOut"){
          navigate("/login")
          setLoading(false)
        }
      }) 
      updateUser() 
      navigate(1)
      return () => Hub.remove('auth', updateUser)

    }
    if(user != null && profile == null){
      checkUserProfile()
    }
    if(profile != null && user != null ){
      getImage()
    }
    // eslint-disable-next-line
  }, [user, profile])
  return (
    <ThemeProvider theme={theme}>
      <Routes >
        <Route element={<UnauthLayout user={user} loading={loading} url={url} />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/testimony" element={<Testimony />} />
          <Route path="/login" element={<AuthUser />} />
        </Route>
        <Route element={<AuthLayout user={user} loading={loading} setLoading={setLoading} profile={profile} setProfile={setProfile} url={url}/>}>
          <Route exact path="/dashboard" element={<Dashboard user={user}/>} />
          <Route path="/profile/me" element={<Profile/>} />

        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;