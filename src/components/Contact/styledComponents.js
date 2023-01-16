import { Grid } from '@mui/material';
import styled from 'styled-components';

export const StyledFormHeader = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.secondary.main};
  margin: 2rem 0 0 1rem;
`;

export const ContactContentContainer = styled(Grid)`
  padding: 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 1.5rem;
`;
