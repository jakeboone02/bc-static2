import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { IRecipe } from '../types/interfaces';
import { Link } from 'react-router-dom';

interface RecipeLinkProps {
  recipe: IRecipe;
}

const RecipeLink: React.FC<RecipeLinkProps> = ({ recipe }) => {
  return (
    <ListGroupItem active={false}>
      <Link to={`/${recipe.key}`}>{recipe.title}</Link>
    </ListGroupItem>
  );
};

export default RecipeLink;
