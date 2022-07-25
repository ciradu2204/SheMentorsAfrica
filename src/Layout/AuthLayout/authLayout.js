import { Navigate} from "react-router-dom";
import { Container } from "@material-ui/core";
 import Navbar from "../../../Components/Navbar";
import useStyles from "./authLayoutStyles";
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
      },
      {
        text: "Logout",
        path: "/logout",
      },
  ]
export default function AuthLayout({ user}) {
  const classes = useStyles();
  return user ? (
    <Container className={classes.container}>
      <Navbar pages={pages} settings={settings} user={user}/> 
      {/* <Box>
        <Outlet/>
      </Box> */}
    
    </Container>
  ) : (
    <Navigate to="/login" />
  );
}
