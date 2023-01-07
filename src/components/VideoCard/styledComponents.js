import { Button, CardMedia } from '@mui/material';
import styled from 'styled-components';

export const StyledCardMedia = styled(CardMedia)`
  text-align: center;
  max-width: 15.9rem;
  height: 28.4rem;
  border: none;
  border-radius: 1.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  overflow: hidden;
  margin-bottom: 1rem;
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const StyledLink = styled(Button)`
  background-color: #495fa6;
  &:hover {
    color: #ccc;
    cursor: pointer;
    text-decoration: none;
  }
`;
