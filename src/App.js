import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import UnauthLayout from "./Pages/Layout/UnauthLayout/unauthLayout";
import Home from "./Pages/Home";
import { createTheme, ThemeProvider } from "@material-ui/core";
import AboutUs from "./Pages/AboutUs";
import FAQs from "./Pages/Faqs";
import { Auth } from "aws-amplify";
import Testimony from "./Pages/Testimony";
import AuthUser from "./Pages/AuthUser";
import AuthLayout from "./Pages/Layout/AuthLayout/authLayout";
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
  console.log(user); 
  const checkUser = async() => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      currentUser? setUser(currentUser): setUser(null);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {

    checkUser();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes >
        <Route element={<UnauthLayout user={{user}} />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/testimony" element={<Testimony />} />
          <Route path="/login" element={<AuthUser />} />
        </Route>
        <Route  element={<AuthLayout user={user}/>}>
          <Route exact path="/dashboard" element={<Dashboard/>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
