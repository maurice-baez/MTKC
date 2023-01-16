import React from 'react';
import T from 'prop-types';
import { unCamelCase } from '../../helpers/helpers';
import {
  StyledRecipeContainer,
  StyledRecipeHeader,
  StyledRecipeText,
} from './styledComponents';

export const RecipeDetail = ({ type }) => {
  // create and import a recipe dictionary and use {type} to access the recipe
  const recipeTitle = unCamelCase(type);
  return (
    <StyledRecipeContainer item={true} xs={8}>
      <StyledRecipeHeader>{recipeTitle}</StyledRecipeHeader>
      <StyledRecipeText>Recipe goes here</StyledRecipeText>
    </StyledRecipeContainer>
  );
};

RecipeDetail.propTypes = { type: T.string.isRequired };