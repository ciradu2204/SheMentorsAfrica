import { Navigate, Outlet } from "react-router-dom";
import { Backdrop, Container } from "@material-ui/core";
import Navbar from "../../Components/Navbar";
import useStyles from "./authLayoutStyles";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import SetUpForm from "../../Components/SetupFom";
import BookingForm from "../../Components/BookingForm";
import { useState } from "react";
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
    path: "/profile/me",
    icon: <AccountCircleIcon />,
  },
  {
    text: "Logout",
    path: "/login",
    icon: <LogoutIcon />,
  },
];
export default function AuthLayout({ user, loading, profile, setProfile, isFormOpen, setFormOpen, mentorsProfiles }) {
  const classes = useStyles();
  const [bookingFormOpen, setBookingFormOpen] = useState(false); 
  const [mentorsProfile, setMentorsProfile] = useState(null)

  return loading ? (
    <Box className={classes.loading}>
      <CircularProgress />
    </Box>
  ) : user !== null ? (
    <Container className={classes.parent}>
      <Navbar user={user} pages={pages} settings={settings} className={classes.navbar} profile={profile} />

      <Container className={classes.childrenBox}>
        <Outlet context={[profile, user, setFormOpen, mentorsProfiles]}/>
      </Container>
      <Backdrop
      className={classes.backdrop}
      open={isFormOpen} >
        <SetUpForm user={user}  profile={profile} setProfile={setProfile} updateForm={setFormOpen}/>
    </Backdrop>
    <Backdrop
      className={classes.backdrop}
      open={bookingFormOpen} >
       <BookingForm profile={profile} bookingForm={bookingFormOpen} setBookingFormOpen={setBookingFormOpen} mentorsProfile={mentorsProfile} />
    </Backdrop>
    </Container>
  ) : (
    <Navigate to="/login" />
  );
}
