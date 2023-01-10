import { Grid } from '@mui/material';
import styled from 'styled-components';
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillYoutube,
} from 'react-icons/ai';
import { FaTiktok, FaPaypal } from 'react-icons/fa';
import { CgPatreon } from 'react-icons/cg';

export const Instagram = styled(AiOutlineInstagram)`
  font-size: 3rem;
  color: #495fa6;
`;

export const Facebook = styled(AiOutlineFacebook)`
  font-size: 3rem;
  color: #495fa6;
`;

export const TikTok = styled(FaTiktok)`
  font-size: 2.9rem;
  color: #495fa6;
`;
export const PayPal = styled(FaPaypal)`
  font-size: 2.5rem;
  color: #495fa6;
`;
export const Patreon = styled(CgPatreon)`
  font-size: 2.5rem;
  color: #495fa6;
`;
export const YouTube = styled(AiFillYoutube)`
  font-size: 2.5rem;
  color: #495fa6;
`;

export const StyledSupportCard = styled.div`
  height: 18rem;
  width: 15.5rem;
  padding: 3rem 1rem 1rem;
  background-color: #f5f5f5;
  border-radius: 1.5rem;
`;
export const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledSupportContainer = styled(Grid)`
  text-align: center;
`;

export const StyledSupportHeader = styled.h1`
  font-size: 1.8rem;
  color: #495fa6;
  margin: 3rem 0 3rem;
`;

export const StyledSupportLinksContainer = styled(Grid)`
  margin-bottom: 3.5rem;
`;

export const StyledSupportLink = styled.a`
  font-size: 1.2rem;
  &:hover {
    color: #ccc;
    cursor: pointer;
    text-decoration: none;
  }
`;

//SOCIALS

export const StyledText = styled.p`
  margin-top: 1.2rem;
  padding: 0 3rem;
`;

export const StyledSocialsContainer = styled(Grid)`
  margin-bottom: 3rem;
`;

export const StyledSocialsHeader = styled.h2`
  font-size: 1.8rem;
  color: #495fa6;
  margin-bottom: 3rem;
`;

export const StyledSocialLink = styled.a`
  color: #495fa6;
  font-size: 1.2rem;
  &:hover {
    color: #ccc;
    cursor: pointer;
    text-decoration: none;
  }
`;
