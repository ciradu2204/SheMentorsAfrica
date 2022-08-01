import * as React from "react";
import {
  AppBar,
  Avatar,
  Button,
  Divider,
  ListItemIcon,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Box } from "@material-ui/core";
import useStyles from "./styles";
import List from "@material-ui/core/List";
import { ListItem } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Drawer } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import Cancel from "@material-ui/icons/Cancel";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { Auth } from "aws-amplify";

const Navbar = ({ user, pages, settings, userImage, ...props }) => {
  const classes = useStyles();
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const ref = React.useRef();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleCloseDrawer = () => {
    setMobileOpen(false);
  };
  const handleCloseSettingsMenu = (e) => {
    setAnchorEl(null);
  };

  const logoutUser = async() => {
    await Auth.signOut();    
  };
  const openSettingsMenu = () => {
    setAnchorEl(ref.current);
  };


 

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container className={classes.container}>
        <Toolbar className={classes.toolbar} disableGutters>
          <Box className={classes.logoSmContainer} component={NavLink} to="/">
            <Box
              className={classes.logoSm}
              component="img"
              alt="Logo"
              src="https://shementorsafrica-img.s3.amazonaws.com/logo-sm.png"
            />
          </Box>
          <Box className={classes.nonMobileContainer}>
            <Box className={classes.logoMdContainer} component={NavLink} to="/">
              <Box
                className={classes.logoMd}
                component="img"
                alt="Logo"
                src="https://shementorsafrica-img.s3.amazonaws.com/logo-large.png"
              />
            </Box>

            <Box className={classes.linksContainer}>
              <List alt="Links" className={classes.links}>
                {pages.map((page, index) => (
                  <ListItem
                    key={index}
                    exact="true"
                    className={classes.link}
                    component={NavLink}
                    to={page.path}
                  >
                    {page.text}
                  </ListItem>
                ))}
              </List>
            </Box>
            {user !== null ? (
              <Box className={classes.user}>
                <Avatar
                  className={classes.avatar}
                  alt={user.attributes.name}
                  src={userImage}
                >
                  {userImage === "" ? user.attributes.name.charAt(0): null}
                </Avatar>

                <IconButton
                  ref={ref}
                  onClick={openSettingsMenu}
                  className={classes.dropdownIcon}
                >
                  <ArrowDropDown />
                </IconButton>
              </Box>
            ) : (
              <Box component="div" className={classes.AuthButtonBox}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/login"
                  className={classes.authButton}
                >
                  LOGIN
                </Button>
              </Box>
            )}
            <Menu
              id="fade-menu"
              open={Boolean(anchorEl)}
              onClose={handleCloseSettingsMenu}
              anchorEl={anchorEl}
              keepmounted="true"
            >
              {settings.map((setting, index) =>
                setting.path === "/login" ? (
                  <MenuItem
                    component={NavLink}
                    to={setting.path}
                    key={index}
                    onClick={logoutUser}
                  >
                    <ListItemIcon>{setting.icon}</ListItemIcon>
                    <Typography textalign="center">{setting.text}</Typography>
                  </MenuItem>
                ) : (
                  <MenuItem
                    component={NavLink}
                    to={setting.path}
                    key={index}
                    onClick={handleCloseSettingsMenu}
                  >
                    <ListItemIcon>{setting.icon}</ListItemIcon>
                    <Typography textalign="center">{setting.text}</Typography>
                  </MenuItem>
                )
              )}
            </Menu>
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
                keepMounted: true,
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
                <Cancel />
              </IconButton>

              <Box className={classes.linksMobContainer}>
                <List className={classes.linksMob} alt="Links">
                  {pages.map((page, index) => (
                    <div key={index}>
                      <ListItem
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

              <Box component="div" className={classes.AuthButtonBox}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/login"
                  className={classes.authButton}
                >
                  LOGIN
                </Button>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
