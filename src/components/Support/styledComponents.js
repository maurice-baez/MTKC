import { Grid } from '@mui/material';
import styled from 'styled-components';
import {
  AiFillYoutube,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { FaPaypal, FaTiktok } from 'react-icons/fa';
import { CgPatreon } from 'react-icons/cg';

export const Instagram = styled(AiOutlineInstagram)`
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const Facebook = styled(AiOutlineFacebook)`
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const TikTok = styled(FaTiktok)`
  font-size: 1.9rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`;
export const PayPal = styled(FaPaypal)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`;
export const Patreon = styled(CgPatreon)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`;
export const YouTube = styled(AiFillYoutube)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const StyledSupportCard = styled.div`
  height: 18rem;
  width: 15.5rem;
  padding: 3rem 1rem 1rem;
  background-color: ${({ theme }) => theme.palette.primary.main};

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
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
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
  padding: 0 3rem;
`;

export const StyledSocialsContainer = styled(Grid)`
  margin-bottom: 3rem;
`;

export const StyledSocialsHeader = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.palette.secondary.main};
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
