import { Navigate, Outlet } from "react-router-dom";
import { Backdrop, Container } from "@material-ui/core";
import Navbar from "../../Components/Navbar";
import useStyles from "./authLayoutStyles";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { useEffect, useState } from "react";
import SetUpForm from "../../Components/SetupFom";
import { API } from 'aws-amplify';
const pages = [
  {
    text: "DASHBOARD",
    path: "/dashboard",
  },
  {
    text: "MENTORS",
    path: "/mentors",
  },
  {
    text: "DISCUSSIONS",
    path: "/discussion",
  },
  {
    text: "OPPORTUNITIES",
    path: "/opportunities",
  },
  {
    text: "BOOKINGS",
    path: "/bookings",
  },
];

const settings = [
  {
    text: "Profile",
    path: "/profile",
    icon: <AccountCircleIcon />,
  },
  {
    text: "Logout",
    path: "/login",
    icon: <LogoutIcon />,
  },
];
export default function AuthLayout({ user, loading, setLoading }) {
  const classes = useStyles();
  const [isFormOpen, setFormOpen] = useState(false)
  const [profile, setProfile] = useState({})

   const checkUserProfile = () => {
    const token = user.signInUserSession.idToken.jwtToken;
    const requestInfo = {
      headers: {Authorization: token}, 
    }
    API.get('profileApi', `/profiles/${user.attributes.sub}`, requestInfo).then((result) => {
      let profile = JSON.parse(result.body)
      if(Object.keys(profile).length === 0){
        setFormOpen(true)
      }
      setProfile(profile);
    }).catch(err => {
      console.log(err);
    })
    setLoading(false)
   }

  useEffect(() => {
    if(user != null){
      checkUserProfile()
    }
  }, [user])

  return loading ? (
    <Box className={classes.loading}>
      <CircularProgress />
    </Box>
  ) : user !== null ? (
    <Container className={classes.parent}>
      <Navbar user={user} pages={pages} settings={settings} className={classes.navbar} profile={profile} />

      <Container className={classes.childrenBox}>
        <Outlet />
      </Container>
      <Backdrop
      className={classes.backdrop}
      open={isFormOpen}>
        <SetUpForm user={user} setLoading={setLoading} setFormOpen={setFormOpen}/>
    </Backdrop>
    </Container>
  ) : (
    <Navigate to="/login" />
  );
}
