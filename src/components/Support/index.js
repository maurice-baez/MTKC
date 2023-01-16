import { Grid } from '@mui/material';
import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  PATREON_LINK,
  TIKTOK_LINK,
  YOUTUBE_LINK,
} from '../../constants/links';
import {
  Facebook,
  Instagram,
  Patreon,
  PayPal,
  StyledGrid,
  StyledSocialLink,
  StyledSocialsContainer,
  StyledSocialsHeader,
  StyledSupportCard,
  StyledSupportContainer,
  StyledSupportHeader,
  StyledSupportLink,
  StyledSupportLinksContainer,
  StyledText,
  TikTok,
  YouTube,
} from './styledComponents';

export const SupportLinks = () => (
  <StyledSupportContainer>
    <StyledSupportHeader>Support me here</StyledSupportHeader>
    <StyledSupportLinksContainer container>
      <StyledGrid item={true} sm={4} xs={6}>
        <StyledSupportCard>
          <StyledSupportLink>
            <PayPal />
          </StyledSupportLink>
          <StyledText>Tips are always appreciated</StyledText>
        </StyledSupportCard>
      </StyledGrid>
      <StyledGrid item={true} sm={4} xs={6}>
        <StyledSupportCard>
          <StyledSupportLink href={PATREON_LINK} target="_blank">
            <Patreon />
          </StyledSupportLink>
          <StyledText>
            Support my Patreon page for exclusive content
          </StyledText>
        </StyledSupportCard>
      </StyledGrid>
      <StyledGrid item={true} sm={4} xs={12}>
        <StyledSupportCard>
          <StyledSupportLink href={YOUTUBE_LINK} target="_blank">
            <YouTube />
          </StyledSupportLink>
          <StyledText>Follow me on Youtube</StyledText>
        </StyledSupportCard>
      </StyledGrid>
    </StyledSupportLinksContainer>

    <StyledSocialsHeader>Follow me on socials</StyledSocialsHeader>
    <StyledSocialsContainer container>
      <Grid item={true} sm={4} xs={6}>
        <StyledSocialLink href={INSTAGRAM_LINK} target="_blank">
          <Instagram />
        </StyledSocialLink>
        <StyledText>Instagram</StyledText>
      </Grid>
      <Grid item={true} sm={4} xs={6}>
        <StyledSocialLink href={FACEBOOK_LINK} target="_blank">
          <Facebook />
        </StyledSocialLink>
        <StyledText>Facebook</StyledText>
      </Grid>
      <Grid item={true} sm={4} xs={12}>
        <StyledSocialLink href={TIKTOK_LINK} target="_blank">
          <TikTok />
        </StyledSocialLink>
        <StyledText>TikTok</StyledText>
      </Grid>
    </StyledSocialsContainer>
  </StyledSupportContainer>
);
