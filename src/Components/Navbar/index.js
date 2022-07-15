import * as React from "react";
import { AppBar, Button, Divider, Toolbar } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Box } from "@material-ui/core";
import useStyles from "./styles";
import List from "@material-ui/core/List";
import { ListItem } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/MenuOutlined";
import { Drawer } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const classes = useStyles();
  const { window, pages } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleCloseDrawer = () => {
    setMobileOpen(false);
  };

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
                <ListItem
                  key={uuid()}
                  exact="true"
                  className={classes.link}
                  component={NavLink}
                  to={page.path}
                >
                  {page.text}
                </ListItem>
              ))}
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/login"
                className={classes.signinButton}
              >
                LOGIN
              </Button>
            </List>
          </Box>

          <Box className={classes.menuItem}>
            <IconButton
              size="medium"
              aria-label="menu of items"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              className={classes.menuIcon}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              container={container}
              anchor="right"
              classes={{ paper: classes.paper }}
              className={classes.drawer}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <IconButton
                size="medium"
                aria-label="cancel drawer"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleCloseDrawer}
                className={classes.cancelIcon}
              >
                <CancelIcon />
              </IconButton>

              <Box className={classes.linksMobContainer}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/login"
                  className={classes.signinButton}
                >
                  LOGIN
                </Button>

                <List className={classes.linksMob} alt="Links">
                  {pages.map((page) => (
                    <div>
                      <ListItem
                        key={uuid()}
                        component={NavLink}
                        exact="true"
                        to={page.path}
                        className={`${classes.linkMob} ${classes.link}`}
                      >
                        {page.text}
                      </ListItem>
                      <Divider />
                    </div>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
