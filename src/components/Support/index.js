import { Grid, Icon } from '@mui/material';
import {
  Facebook,
  Instagram,
  Patreon,
  PayPal,
  StyledIcon,
  StyledSocialLink,
  StyledSocialsContainer,
  StyledSocialsHeader,
  StyledSupportContainer,
  StyledSupportHeader,
  StyledSupportLink,
  StyledSupportLinksContainer,
  StyledText,
  TikTok,
  YouTube,
} from './styledComponents';

export const SupportLinks = () => {
  return (
    <StyledSupportContainer>
      <StyledSupportHeader>Support me here</StyledSupportHeader>
      <StyledSupportLinksContainer container>
        <Grid item={true} xs={6} sm={4}>
          <StyledSupportLink>
            <PayPal />
          </StyledSupportLink>
          <StyledText>Tips are always appreciated</StyledText>
        </Grid>
        <Grid item={true} xs={6} sm={4}>
          <StyledSupportLink>
            <Patreon />
          </StyledSupportLink>
          <StyledText>
            Support my Patreon page for exclusive content!
          </StyledText>
        </Grid>
        <Grid item={true} xs={12} sm={4}>
          <StyledSupportLink>
            <YouTube />
          </StyledSupportLink>
          <StyledText>Follow me on Youtube</StyledText>
        </Grid>
      </StyledSupportLinksContainer>

      <StyledSocialsHeader>Follow me on socials!</StyledSocialsHeader>
      <StyledSocialsContainer container>
        <Grid item={true} xs={6} sm={4}>
          <StyledSocialLink>
            <Instagram />
          </StyledSocialLink>
          <StyledText>Instagram</StyledText>
        </Grid>
        <Grid item={true} xs={6} sm={4}>
          <StyledSocialLink>
            <Facebook />
          </StyledSocialLink>
          <StyledText>Facebook</StyledText>
        </Grid>
        <Grid item={true} xs={12} sm={4}>
          <StyledSocialLink>
            <TikTok />
          </StyledSocialLink>
          <StyledText>TikTok</StyledText>
        </Grid>
      </StyledSocialsContainer>
    </StyledSupportContainer>
  );
};
