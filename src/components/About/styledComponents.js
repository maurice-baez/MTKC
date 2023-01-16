import { Grid } from '@mui/material';
import styled from 'styled-components';

export const StyledHeader = styled.h1`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem 1rem 2rem 0;
`;

export const StyledSubHeader = styled.h2`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

export const StyledBodyText = styled.p`
  font-size: 1.2rem;
`;

// used by index.js
export const StyledTextContainer = styled(Grid)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 1.5rem;
  height: 30rem;
  padding: 3rem;
  text-align: center;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// used by PhotoSection
export const StyledImage = styled.img`
  width: 23rem;
  height: 23rem;
  border-radius: 1rem;
`;
