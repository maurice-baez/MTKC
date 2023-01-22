import { Box, Button, Input } from '@mui/material';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const SearchField = styled(Input)`

`;

export const StyledButton = styled(Button)`
  width: 5rem;

  &:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
    cursor: pointer;
    text-decoration: none;
  }
`;