import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { RecipeDetail } from '../components/RecipeDetail';
import VideoCard from '../components/VideoCard';
import { videoDictionary } from '../constants/videoDictionary';
import { StyledGrid } from './styledComponents';

export const Recipe = () => {
  const { id } = useParams();
  const source = videoDictionary[id];

  return (
    <StyledGrid container>
      <Grid item={true} xs={4}>
        <VideoCard src={source} title={id} />
      </Grid>
      <RecipeDetail type={id} />
    </StyledGrid>
  );
};
