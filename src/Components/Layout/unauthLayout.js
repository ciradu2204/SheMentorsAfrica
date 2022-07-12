import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Box from "@material-ui/core/Box";
import { Container, IconButton, Typography } from "@material-ui/core";
import useStyles from "./unauthLayoutStyle";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useLocation } from "react-router-dom";
import VerticalSlider from "../Vertical-slider";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavigateNext from "@material-ui/icons/NavigateNext";
  

import NavigateBefore from "@material-ui/icons/NavigateBefore";

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

const partners = [
  {
    alt: "she-code-africa",
    link: "https://shementorsafrica-img.s3.amazonaws.com/sheCodeAfrica.png",
  },
  {
    alt: "womenTechMakers",
    link: "https://shementorsafrica-img.s3.amazonaws.com/womenWhoCode.png",
  },
  {
    alt: "developerInVogue",
    link: "https://shementorsafrica-img.s3.amazonaws.com/developersInVogue.png",
  },

  {
    alt: "akiraChix",
    link: "https://shementorsafrica-img.s3.amazonaws.com/akirachix.png",
  },
];

const ButtonMailto = ({ mailto, ...props }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {props.children}
    </Link>
  );
};

export default function AnauthLayout({ children }) {
  const location = useLocation();
  const [countStart, SetCounterStart] = useState(0);
  const [countEnd, SetCounterEnd] = useState(pages.length-1);


 

  const handlePrev = () => {
    if (countStart > 0) {
      SetCounterStart(prev => prev - 1);
      SetCounterEnd(prev => prev- 1);
    }

  };

  const handleNext = () => {

    if (countEnd < pages.length - 1) {
      SetCounterEnd(prev => prev + 1);
      SetCounterStart(prev => prev + 1);
     
    }
  
  };

  useEffect(() =>{

    if(window.innerWidth <= 600){
      SetCounterEnd(1)
    }
  }, [])


  const classes = useStyles();

  return (
    <div className={classes.parent}>
      <Navbar authLinks={authLinks} pages={pages} />

      <Container className={classes.container} maxWidth={false} disableGutters>
        <Box className={classes.childrenBox}>{children}</Box>
        <VerticalSlider pages={pages} className={classes.verticalSlider} />
      </Container>

      {location.pathname === pages[1].path ? (
        <Box className={classes.partnersContainer}>
          <IconButton onClick={handlePrev} fontSize="large"  className={classes.carouselIcons}>
            <NavigateBefore />
          </IconButton>
          <Box className={classes.partnersInfoBox}>
            <Typography variant="h6" className={classes.partnerTitle}>
              OUR PARTNERS{" "}
            </Typography>
            <Box className={classes.partnersBox}>
              {partners
                .filter(
                  (partner, index) => index >= countStart && index <= countEnd
                )
                .map((partner, index) => {
                  return (
                    <Box
                      className={classes.partner}
                      component="img"
                      alt={partner.alt}
                      src={partner.link}
                    />
                  );
                })}
            </Box>
          </Box>

          <IconButton onClick={handleNext} size="medium" className={classes.carouselIcons}>
            <NavigateNext />
          </IconButton>
          </Box>
      ) : null}

      {location.pathname !== pages[0].path ? (
        <Box className={classes.footer}>
          <Typography variant="caption" className={classes.copyright}>
            Copyright@2022 by She Mentors Africa
          </Typography>
          <Box className={classes.socialIcons}>
            <ButtonMailto mailto="mailto:c.iradukund@alustudent.com">
              <IconButton
                href=""
                target="_blank"
                arial-label="Mail"
                size="small"
                className={classes.socialIcon}
              >
                <MailOutlineIcon />
              </IconButton>
            </ButtonMailto>
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
        </Box>
      ) : null}
    </div>
  );
}
