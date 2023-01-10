import { Button, CardMedia } from '@mui/material';
import styled from 'styled-components';

export const StyledCardMedia = styled(CardMedia)`
  text-align: center;
  max-width: 15.9rem;
  height: 28.4rem;
  border: none;
  border-radius: 1.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // text-align: center;
  height: 6rem;
  width: 18rem;
  padding: 1rem;
  background-color: #f5f5f5;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 1.5rem;
`;

export const StyledLink = styled(Button)`
  background-color: #495fa6;
  max-width: 5rem;
  &:hover {
    color: #ccc;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const StyledTitle = styled.h3`
  font-size: 1.2rem;
  margin-right: 1.5rem;
`;
