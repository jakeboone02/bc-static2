import React from 'react';
import { IIngredient } from '../types/interfaces';
import formatQty from 'format-quantity';

const formatQtyRange = (ing: IIngredient) =>
  formatQty(ing.qty) +
  (ing.qty2 > 0
    ? (ing.qty === 0 ? '0' : '') + ' ‒ ' + formatQty(ing.qty2)
    : '');

interface IngredientProps {
  ingredient: IIngredient;
}

const Ingredient: React.FC<IngredientProps> = ({ ingredient }) => {
  const qtyRange = formatQtyRange(ingredient);
  const ingText = `${qtyRange} ${ingredient.uom} ${ingredient.desc}`.trim();

  if (ingredient.isGroupHeader) {
    return <h4>{ingredient.desc}</h4>;
  } else {
    return <span className="ingredient">{ingText}</span>;
  }
};

export default Ingredient;
