import { Box, Button, Typography } from '@mui/material';
import styled from 'styled-components';

export const NavLink = styled(Button)`
  :hover {
    color: ${({ theme }) => theme.palette.secondary.main};
    cursor: pointer;
    text-decoration: none;
  }
`;

export const StyledText = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-family: 'monospace';
  flex-grow: 1;
  font-weight: 700;
  // margin-right: 2rem;
  text-decoration: none;

  :hover {
    color: ${({ theme }) => theme.palette.secondary.main};
    cursor: pointer;
    text-decoration: none;
  }
`;

export const StyledHamburger = styled(Box)`
  flex-grow: 1;
`;
