import { Grid } from '@mui/material';
import styled from 'styled-components';

// used by HeaderSection
export const HeaderContainer = styled(Grid)``;

export const StyledHeader = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #495fa6;
  margin: 0 0 2rem 2rem;
`;

export const StyledSubHeader = styled.h2`
  color: #495fa6;
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

export const StyledBodyText = styled.p`
  font-size: 1.2rem;
`;

// used by index.js
export const StyledTextContainer = styled(Grid)`
  padding: 2rem;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 1.5rem;
`;

// used by PhotoSection
export const StyledImage = styled.img`
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
`;
