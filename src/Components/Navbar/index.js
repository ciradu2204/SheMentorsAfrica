import * as React from "react";
import { AppBar, Divider, Toolbar } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Box } from "@material-ui/core";
import useStyles from "./styles";
import List from "@material-ui/core/List";
import { ListItem } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/MenuOutlined"

const pages = [
  {
    id: 1,
    text: "HOME",
    path: "/home",
  },
  {
    id: 2,
    text: "ABOUT US",
    path: "/aboutUs",
  },
  {
    id: 3,
    text: "FAQS",
    path: "/faqs",
  },
  {
    id: 4,
    text: "TESTIMONY",
    path: "/testimony",
  },
];

const Navbar = () => {
  const classes = useStyles();
  const [handleDrawerToggle, sethandleDrawerToggle] = React.useState(false); 
 

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar className={classes.toolbar} disableGutters>
          <Box
            className={classes.logoMd}
            component="img"
            alt="Logo"
            src="https://shementorsafrica-img.s3.amazonaws.com/logo-large.png"
          />
          <Box
            className={classes.logoSm}
            component="img"
            alt="Logo"
            src="https://shementorsafrica-img.s3.amazonaws.com/logo-sm.png"
          />

          <Box className={classes.linksContainer}>
            <List className={classes.links} alt="Links">
              {pages.map((page) => (
                <ListItem key={page.text} className={classes.link}>
                  <ListItemText primary={page.text} />
                </ListItem>
              ))}
              <ListItem
                key="SIGN IN"
                className={`${classes.authLinks} ${classes.leftAlign}`}
              >
                <ListItemText primary="SIGN IN" />
              </ListItem>
              <Divider flexItem orientation="vertical" sx={{ my: 1 }} />
              <ListItem key="SIGN UP" className={classes.authLinks}>
                <ListItemText primary="SIGN UP" />
              </ListItem>
            </List>
          </Box>

          <Box className={classes.menuItem}>
          <IconButton
              size="large"
              aria-label="menu of items"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              className={classes.menuIcon}
            >
              <MenuIcon />
            </IconButton>
      
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
