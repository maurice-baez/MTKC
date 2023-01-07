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
`;

export const Facebook = styled(AiOutlineFacebook)`
  font-size: 3rem;
`;

export const TikTok = styled(FaTiktok)`
  font-size: 2.5rem;
`;
export const PayPal = styled(FaPaypal)`
  font-size: 2.5rem;
`;
export const Patreon = styled(CgPatreon)`
  font-size: 2.5rem;
`;
export const YouTube = styled(AiFillYoutube)`
  font-size: 2.5rem;
`;

export const StyledSupportContainer = styled(Grid)`
  text-align: center;
`;

export const StyledSupportHeader = styled.h1`
  font-size: 1.8rem;
  color: #495fa6;
  margin: 3rem 0 5rem;
`;

export const StyledSupportLinksContainer = styled(Grid)`
  margin-bottom: 3.5rem;
`;

export const StyledSupportLink = styled.a`
  color: #495fa6;
  font-size: 1.2rem;
  &:hover {
    color: #ccc;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const StyledText = styled.p`
  margin-top: 1.2rem;
  padding: 0 3rem;
`;

export const StyledSocialsContainer = styled(Grid)``;

export const StyledSocialsHeader = styled.h2`
  font-size: 1.8rem;
  color: #495fa6;
  margin-bottom: 5rem;
`;

export const StyledSocialLink = styled.a`
  color: #495fa6;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  &:hover {
    color: #ccc;
    cursor: pointer;
    text-decoration: none;
  }
`;
