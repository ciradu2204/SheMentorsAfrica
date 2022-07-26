import { Navigate, Outlet } from "react-router-dom";
import { Container } from "@material-ui/core";
import Navbar from "../../Components/Navbar";
import useStyles from "./authLayoutStyles";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { useEffect } from "react";
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
export default function AuthLayout({ user, loading, checkUser }) {

  const classes = useStyles();
  useEffect(() => {
    checkUser("dashboard");
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Box className={classes.loading}>
      <CircularProgress />
    </Box>
  ) : user !== null ? (
    <Container className={classes.parent}>
      <Navbar user={user} pages={pages} settings={settings} className={classes.navbar} />

      <Container className={classes.childrenBox}>
        <Outlet />
      </Container>
    </Container>
  ) : (
    <Navigate to="/login" />
  );
}
