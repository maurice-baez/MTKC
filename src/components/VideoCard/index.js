import * as React from 'react';
import { useLocation } from 'react-router-dom';
import ConditionalRender from '../../helpers/ConditionalRender';
import {
  StyledCardMedia,
  StyledLink,
  VideoContainer,
} from './styledComponents';

export default function VideoCard({ src, title }) {
  const { pathname } = useLocation();

  return (
    <VideoContainer>
      <StyledCardMedia
        component="iframe"
        scrolling="no"
        allowFullScreen
        src={src}
        alt={title}
      />
      <ConditionalRender
        Component={
          <StyledLink href={`/recipes/${title}`} variant="contained">
            Recipe
          </StyledLink>
        }
        shouldRender={!pathname.includes('recipes')}
      />
    </VideoContainer>
  );
}
