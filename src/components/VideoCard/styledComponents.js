import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
} from '@mui/material';

import styled from 'styled-components';

export const StyledCardMedia = styled(CardMedia)`
  border: none;
  height: 28.4rem;
  max-width: 15.9rem;
  text-align: center;
`;

export const StyledCard = styled(Card)`
  border: 0.5px solid ${({ theme }) => theme.palette.secondary.main};
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledCardHeader = styled(CardHeader)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.2rem;
  font-weight: 700;
  height: 5rem;
  letter-spacing: 0.15rem;
  line-height: 1.7rem;
  text-align: center;
`;

export const StyledLink = styled(Button)`
  width: 7rem;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    cursor: pointer;
    text-decoration: none;
  }
`;

export const StyledTitle = styled.h3`
  font-size: 1.2rem;
  margin-right: 1.5rem;
`;

export const VideoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;