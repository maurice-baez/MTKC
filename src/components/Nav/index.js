import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, StyledText } from './styledComponents';

const pages = ['About', 'Videos', 'Recipes', 'Contact', 'Support'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            component="a"
            href="/"
            noWrap
            sx={{
              color: 'inherit',
              display: { md: 'flex', xs: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              ml: 1,
              mr: 5,
              textDecoration: 'none',
            }}
            variant="h6"
          >
            MTKC
          </Typography>

          <Box sx={{ display: { md: 'none', xs: 'flex' }, flexGrow: 1 }}>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              aria-label="account of current user"
              color="inherit"
              onClick={handleOpenNavMenu}
              size="large"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom',
              }}
              id="menu-appbar"
              keepMounted
              onClose={handleCloseNavMenu}
              open={Boolean(anchorElNav)}
              sx={{ display: { md: 'none', xs: 'block' } }}
              transformOrigin={{
                horizontal: 'left',
                vertical: 'top',
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    color='inherit'
                    component="a"
                    href={`/${page}`}
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <StyledText
            component="a"
            href="/home"
            noWrap
            sx={{
              display: { md: 'none', xs: 'flex' },
              letterSpacing: '0.3rem',
            }}
            variant="h5"
          >
            MTKC
          </StyledText>
          <Box sx={{ display: { md: 'flex', xs: 'none' }, flexGrow: 1 }}>
            {pages.map((page) => (
              <NavLink
                color='secondary'
                component="a"
                href={`/${page}`}
                key={page}
                onClick={handleCloseNavMenu}
              >
                {page}
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open links">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Box
                  alt="MTKC logo"
                  component="img"
                  src="/MTKClogo.jpg"
                  sx={{ height: 42 }}
                /> */}
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              anchorOrigin={{
                horizontal: 'right',
                vertical: 'top',
              }}
              id="menu-appbar"
              keepMounted
              onClose={handleCloseUserMenu}
              open={Boolean(anchorElUser)}
              sx={{ mt: '45px' }}
              transformOrigin={{
                horizontal: 'right',
                vertical: 'top',
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            alt="MTKC logo"
            component="img"
            src="/MTKClogo.png"
            sx={{ height: 80 }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
