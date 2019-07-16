import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { IRecipe } from '../types/interfaces';
import RecipeLink from './RecipeLink';

interface RecipeListProps {
  recipes: IRecipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  const bcdmap = recipes
    .sort((a, b) => (a.title > b.title ? 1 : -1))
    .map(recipe => <RecipeLink key={recipe.key} recipe={recipe} />);

  return <ListGroup>{bcdmap}</ListGroup>;
};

export default RecipeList;
