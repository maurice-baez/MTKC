
import { Grid } from '@mui/material';
import { HeaderSection } from './HeaderSection';
import { PhotoSection } from './PhotoSection';
import {
  AndroidChatBubble,
  BoehmerContainer,
  BubbleText,
  ChatBubble,
  ChatBubble2,
  ChatBubble3,
  Container,
  IPhoneChatBubble,
  LeftContainer,
  StyledBodyText,
  StyledSmallImage,
  StyledSubHeader,
  StyledTextContainer,
  TopContainer,
} from './styledComponents';
import { TextSection } from './TextSection';

export const About = () => (
  <Grid container>
    <Grid item={true} sm={5} xs={12}>
      <LeftContainer>
        {/* <HeaderSection /> */}
        <PhotoSection />
      </LeftContainer>
    </Grid>

    <StyledTextContainer container item={true} sm={7} xs={12}>

      {/* Ang Chat Bubble */}
      <Grid item={true} xs={12}>
        <ChatBubble>
          <TextSection />
        </ChatBubble>
      </Grid>

      {/* Dad container */}
      <Grid item={true} xs={8}></Grid>
      <Grid item={true} xs={4}>
        <TopContainer>
          <IPhoneChatBubble>
            <BubbleText>Sauce!</BubbleText>
          </IPhoneChatBubble>
          <StyledSmallImage src='../ang-dad.jpeg' />
        </TopContainer>
      </Grid>

      {/* BoehmerContainer */}
      <Grid item={true} xs={8}>
        <Container>
          <StyledSmallImage src='../boehmer.jpeg' />
          <AndroidChatBubble >
            <BubbleText>Gravy!</BubbleText>
          </AndroidChatBubble>
        </Container>
      </Grid>
      <Grid item={true} xs={4}></Grid>

    </StyledTextContainer>
    {/* add rita bubble */}
  </Grid>
);
