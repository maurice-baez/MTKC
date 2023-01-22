import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledSubHeader = styled.h2`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const StyledBodyText = styled.p`
  font-size: 1.2rem;
`;

// used by index.js

export const TopContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const Container = styled.div`
  display: flex;
  margin-top: -3.5rem;
`;

export const StyledSmallImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin: 1rem;
`;

export const StyledTextContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

export const BubbleText = styled.h3`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.2rem;
  font-weight: 700;
`;

export const ChatBubble = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 1.5rem;
  height: 100%;
  width: 100%;
  padding: 1.5rem 3rem;
  text-align: center;
  margin-bottom: 2rem;

  :after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 3.6rem solid transparent;
    border-right-color: ${({ theme }) => theme.palette.primary.main};
    border-left: 0;
    border-bottom: 0;
    margin-top: -18px;
    margin-left: -36px;
}
`;

export const IPhoneChatBubble = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.iphoneBlue.main};
  border-radius: 1.5rem;
  height: 5rem;
  width: 12rem;
  padding: 1.5rem 3rem;
  text-align: center;
  margin-bottom: 2rem;

  :after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-left-color: ${({ theme }) => theme.palette.iphoneBlue.main};
    border-right: 0;
    border-bottom: 0;
    margin-top: -10px;
    margin-right: -20px;
  }
`;

export const AndroidChatBubble = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.androidGreen.main};
  border-radius: 1.5rem;
  height: 5rem;
  width: 12rem;
  padding: 1.5rem 3rem;
  text-align: center;
  margin-bottom: 2rem;

  :after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 1.969em solid transparent;
    border-right-color: ${({ theme }) => theme.palette.androidGreen.main};
    border-left: 0;
    border-bottom: 0;
    margin-top: -0.984rem;
    margin-left: -1.469rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// used by PhotoSection
export const StyledImage = styled.img`
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
`;
