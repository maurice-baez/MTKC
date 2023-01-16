import { Grid } from '@mui/material';
import styled from 'styled-components';

export const StyledRecipeContainer = styled(Grid)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 1.5rem;
  padding: 1rem;
  text-align: center;
`;

export const StyledRecipeHeader = styled.h1`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 2rem;
  letter-spacing: 0.1rem;
`;

export const StyledRecipeText = styled.p`
  font-size: 1.2rem;
`;
