import { Route, Routes } from "react-router-dom";
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
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import { API, Storage } from "aws-amplify";
import Mentors from "./Pages/Mentors";
import Bookings from "./Pages/Bookings";

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
    info: {
      main: "#408FAA",
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        // Focused state
        "&$focused $notchedOutline": {
          borderColor: "#408FAA",
        },
      },
    },
    MuiInputLabel: {
      root: {
        backgroundColor: "white",
        "&$focused": {
          color: "#408FAA",
          backgroundColor: "white",
        },
      },
    },
  },
});

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [registerForm, setRegisterForm] = useState(false);
  const [mentorsProfilesNoImage, setMentorsProfilesNoImage] = useState(null);
  const [mentorsProfiles, setMentorsProfiles] = useState(null);
  const getCurrentUser = async () => {
    try {
      return await Auth.currentAuthenticatedUser();
    } catch {
      // currentAuthenticatedUser throws an Error if not signed in
      return null;
    }
  };
  const getImage = async (key, identityId) => {
    if (identityId !== "") {
      const result = await Storage.get(key, {
        level: "protected",
        expires: "604800",
        identityId: identityId,
      });
      return result;
    } else {
      const result = await Storage.get(key, {
        level: "protected",
        expires: "604800",
      });
      return result;
    }
  };
  const fetchMentors = () => {
    const token = user?.signInUserSession?.idToken?.jwtToken;
    const requestInfo = {
      headers: { Authorization: token },
      body: { profile: profile },
    };
    API.get("profileApi", "/profiles", requestInfo)
      .then((result) => {
        setMentorsProfilesNoImage(JSON.parse(result.body));
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  useEffect(() => {
    setLoading(true);
    const updateUser = async () => {
      setUser(await getCurrentUser());
      setLoading(false);
    };
    Hub.listen("auth", updateUser);
    updateUser();
    fetchMentors();
    return () => Hub.remove("auth", updateUser);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (user != null) {
      setLoading(true);
      const checkUserProfile = () => {
        const token = user.signInUserSession.idToken.jwtToken;
        const requestInfo = {
          headers: { Authorization: token },
        };
        API.get("profileApi", `/profiles/${user.attributes.sub}`, requestInfo)
          .then((result) => {
            let profile = JSON.parse(result.body);
            setProfile(profile);
          })
          .catch((err) => {
            setRegisterForm(true);
            console.log(err);
          });
      };

      checkUserProfile();
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    setLoading(true);
    if (profile != null) {
      if (!profile.profile.hasOwnProperty("url")) {
        const getCurrentUserUrl = async () => {
          let url = await getImage(profile.profile.profileImage.file.key, "");
          let newProfile = { ...profile.profile, url };
          setProfile({ profile: newProfile });
        };
        getCurrentUserUrl();
      }
      fetchMentors();
    }
    setLoading(false);
    //eslint-disable-next-line
  }, [profile]);

  useEffect(() => {
    if (mentorsProfilesNoImage != null) {
      const getProfilesUrl = async () => {
        setLoading(true);
        let result = await Promise.all(
          mentorsProfilesNoImage.map(async (mentor) => {
            try {
               let url = await getImage(
                mentor.profile?.profileImage.file.key,
                mentor.profile?.identityId
              );
              let profile = {...mentor.profile, url};
              return { profile: profile };
            } catch (err) {
              console.log(err);
              throw err;
            }
          })
        );
        setMentorsProfiles(result);
        setLoading(false);
      };
      getProfilesUrl();
    }
  }, [mentorsProfilesNoImage]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          element={
            <UnauthLayout user={user} loading={loading} profile={profile} />
          }
        >
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route
            path="/mentors"
            element={<Mentors mentorsProfiles={mentorsProfiles} />}
          />
          <Route path="/testimony" element={<Testimony />} />
          <Route path="/login/" element={<AuthUser />} />
        </Route>
        <Route
          element={
            <AuthLayout
              user={user}
              loading={loading}
              setLoading={setLoading}
              profile={profile}
              setProfile={setProfile}
              setFormOpen={setRegisterForm}
              isFormOpen={registerForm}
              mentorsProfiles={mentorsProfiles}
              setMentorsProfiles={setMentorsProfiles}
            />
          }
        >
          <Route exact path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route
            path="/mentors"
            element={<Mentors mentorsProfiles={mentorsProfiles} />}
          />
          <Route path="/bookings" element={<Bookings user={user} />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
