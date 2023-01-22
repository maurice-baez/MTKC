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
import { NavLink, StyledHamburger, StyledText } from './styledComponents';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { SearchBar } from '../Search';
// import { Search } from '../Search';

const pages = ['About', 'Videos', 'Recipes', 'Contact', 'Support'];

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
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* HAMBURGER MENU WITH LINKS ON SMALLER SCREENS */}
          <StyledHamburger sx={{ display: { md: 'none', xs: 'flex' } }}>
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
          </StyledHamburger>
          {/* END HAMBURGER MENU WITH LINKS ON SMALLER SCREENS * */}

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
          <SearchBar />
          <Box
            alt="MTKC logo"
            component="img"
            src="/MTKClogo.png"
            sx={{ height: 80, marginLeft: 2 }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
