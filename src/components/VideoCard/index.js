import * as React from 'react';
import T from 'prop-types';

import { Card } from '@mui/material';
import {
  StyledCardContent,
  StyledCardHeader,
  StyledCardMedia,
  StyledLink,
  VideoContainer,
} from './styledComponents';
import { useLocation } from 'react-router-dom';
import { unCamelCase } from '../../helpers/helpers';
import ConditionalRender from '../../helpers/ConditionalRender';
import LoadingCard from './LoadingCard';

export default function VideoCard({
  needsMarginTop,
  src,
  title,
}) {
  const { pathname } = useLocation();
  const formattedTitle = unCamelCase(title);
  const [hasVideoLoaded, setHasVideoLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasVideoLoaded(true);
    }, 5000);
  }, []);

  return (
    <VideoContainer $needsMarginTop={needsMarginTop}>
      <Card sx={{ borderRadius: '1rem', maxWidth: '15.9rem' }}>
        <StyledCardHeader disableTypography title={formattedTitle} />
        <ConditionalRender
          Component={(
            <StyledCardMedia
              allowFullScreen
              alt={title}
              component="iframe"
              // scrolling="no"
              src={src}
            />
          )}
          FallbackComponent={<LoadingCard />}
          shouldRender={hasVideoLoaded}
        />
        <StyledCardContent>
          <ConditionalRender
            Component={
              <StyledLink
                color='secondary'
                href={`/recipes/${title}`}
                variant="contained">
              Recipe
              </StyledLink>
            }
            shouldRender={!pathname.includes('recipes')}
          />
        </StyledCardContent>
      </Card>
    </VideoContainer>
  );
}

VideoCard.propTypes = {
  needsMarginTop: T.bool,
  src: T.string.isRequired,
  title: T.string.isRequired,
};
