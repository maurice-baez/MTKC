import { Fragment } from 'react';
import { StyledBodyText, StyledSubHeader } from './styledComponents';
import { ANG_BIO_TEXT } from '../../constants/copy';

export const TextSection = () => (
  <Fragment>
    <StyledSubHeader>Hi, I'm Angelina.</StyledSubHeader>
    <StyledBodyText>{ANG_BIO_TEXT}</StyledBodyText>
  </Fragment>
);
