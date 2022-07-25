import * as React from "react";
import { AppBar, Avatar, Button, Divider, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Box } from "@material-ui/core";
import useStyles from "./styles";
import List from "@material-ui/core/List";
import { ListItem } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Drawer } from "@material-ui/core";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import Cancel from "@material-ui/icons/Cancel";
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
const Navbar = ({user, pages, settings, ...props}) => {
  const classes = useStyles();
  const { window } = props;
  const location = useLocation();
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleCloseDrawer = () => {
    setMobileOpen(false);
  };
  const handleCloseSettingsMenu = () => {
    setAnchorEl(false);
  };
  const openSettingsMenu = () =>{
    setAnchorEl(true)
  }

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container className={classes.container}>
        <Toolbar className={classes.toolbar} disableGutters>
          <Box className={classes.logoSmContainer}>
            <Box
              className={classes.logoSm}
              component="img"
              alt="Logo"
              src="https://shementorsafrica-img.s3.amazonaws.com/logo-sm.png"
            />
          </Box>
          <Box className={classes.nonMobileContainer}>
            <Box className={classes.logoMdContainer}>
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
              {user?(
               <Box className={classes.user}>
                <Avatar
                  className={classes.purple}
                  alt={user.attributes.name}
                 // src={user.attributes.imageUrl}
                >
                  {user.attributes.name.charAt(0)}
                </Avatar>

                <IconButton arial-label="dropdown" onClick={openSettingsMenu}>
                 <ArrowDropDown/>
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
              sx={{ mt: '45px' }}
              id="menu-appbar"
              // anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={anchorEl}
              onClose={handleCloseSettingsMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseSettingsMenu}>
                  <Typography textAlign="center">{setting.text}</Typography>
                </MenuItem>
              ))}
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
              <Menu />
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
                    <div>
                      <ListItem
                        key={index}
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
