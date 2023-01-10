import * as React from 'react';
import { useLocation } from 'react-router-dom';
import ConditionalRender from '../../helpers/ConditionalRender';
import { unCamelCase } from '../../helpers/helpers';
import {
  StyledCard,
  StyledCardMedia,
  StyledLink,
  StyledTitle,
  VideoContainer,
} from './styledComponents';

export default function VideoCard({ src, title }) {
  const { pathname } = useLocation();
  const formattedTitle = unCamelCase(title);

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
          <StyledCard>
            <StyledTitle>{formattedTitle}</StyledTitle>
            <StyledLink href={`/recipes/${title}`} variant="contained">
              Recipe
            </StyledLink>
          </StyledCard>
        }
        shouldRender={!pathname.includes('recipes')}
      />
    </VideoContainer>
  );
}
