import { Skeleton } from '@mui/material';
import { VideoContainer } from './styledComponents';

const LoadingCard = () => (
  <Skeleton
    animation='wave'
    height={'28.4rem'}
    variant='rectangular'
    width={'15.9rem'} />
);

export default LoadingCard;