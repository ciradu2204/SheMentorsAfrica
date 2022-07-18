import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import UnauthLayout from "./Components/Layout/UnauthLayout/unauthLayout";
import Home from "./Components/Home";
import { createTheme, ThemeProvider } from "@material-ui/core";
import AboutUs from "./Components/AboutUs";
import FAQs from "./Components/Faqs";
import { Auth } from "aws-amplify";
import Testimony from "./Components/Testimony";
import AuthUser from "./Components/AuthUser";
import AuthLayout from "./Components/Layout/AuthLayout/authLayout";
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
  const checkUser = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      currentUser && setUser(currentUser);
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
        <Route path="/" element={<UnauthLayout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/testimony" element={<Testimony />} />
          <Route path="/login" element={<AuthUser />} />
        </Route>
        <Route path="/dashboard" element={<AuthLayout />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
