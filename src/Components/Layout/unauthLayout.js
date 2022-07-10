import React from "react";
import Navbar from "../Navbar";
import Box from "@material-ui/core/Box";
import { Container, IconButton, Typography } from "@material-ui/core";
import useStyles from "./unauthLayoutStyle";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import {useLocation} from "react-router-dom"
import { useWindowHeight } from "@react-hook/window-size";
import VerticalSlider from "../Vertical-slider";

const pages = [
  {
    id: 0,
    text: "HOME",
    path: "/",
  },
  {
    id: 1,
    text: "ABOUT US",
    path: "/aboutus",
  },
  {
    id: 2,
    text: "FAQS",
    path: "/faqs",
  },
  {
    id: 3,
    text: "TESTIMONY",
    path: "/testimony",
  },
];

const authLinks = [
  {
    text: "SIGN UP",
    path: "/signup",
  },
  {
    text: "SIGN IN",
    path: "/signin",
  },
];

export default function AnauthLayout({ children }) {

  const onlyHeight = useWindowHeight();
  const location = useLocation();

  const props = {
    height: onlyHeight - 60,
  };
  console.log(onlyHeight);
  const classes = useStyles(props);

  return (
    <div className={classes.parent}>
      <Navbar authLinks={authLinks} pages={pages} />

      <Container className={classes.container} maxWidth={false} disableGutters>
        <Box className={classes.childrenBox}>{children}</Box>
        <VerticalSlider pages={pages} className={classes.verticalSlider}/>
      </Container>
      {location.pathname !== pages[0].path?<Box className={classes.footer}>
        <Typography variant="caption" className={classes.copyright}>
          Copyright@2022 by She Mentors Africa
        </Typography>
        <Box className={classes.socialIcons}>
          <IconButton
            href=""
            target="_blank"
            arial-label="Mail"
            size="small"
            className={classes.socialIcon}
          >
            <MailOutlineIcon />
          </IconButton>

          <IconButton
            href="www.linkedin.com"
            target="_blank"
            arial-label="LinkedIn"
            size="small"
            className={classes.socialIcon}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            href="www.facebook.com"
            target="_blank"
            arial-label="Facebook"
            size="small"
            className={classes.socialIcon}
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            href="www.instagram.com"
            target="_blank"
            arial-label="Instagram"
            size="small"
            className={classes.socialIcon}
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>: null}
    </div>
  );
}
