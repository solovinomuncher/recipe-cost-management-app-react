import React from "react";

// const mockFormData = {
//   imperialOrMetric: "",
//   recipeName: "",
//   recipeNotes: "",
//   recipeOriginalServingSize: "1",
//   recipeNewServingSize: "1",
//   ingredientArray: [
//     {
//       qty: "0",
//       units: "",
//       ingredient: "",
//       bulkQty: "0",
//       bulkUnits: "gallons",
//       bulkCost: "0",
//     },
//   ],
// };

export default function RecipePrintout(props) {
  const ingredientArray = props.formData.ingredientArray.map((ingredient) => {
    return (
      <li key={ingredient.ingredient}>
        {ingredient.ingredient}: {ingredient.qty} {ingredient.units} (ingredient
        cost goes here)
      </li>
    );
  });

  return (
    <main className="recipe-cost-printout">
      <h3>Recipe Cost Printout</h3>
      <h2>{props.formData.recipeName}</h2>
      <p>{props.formData.recipeNotes}</p>
      <p>Serving size: {props.formData.recipeNewServingSize}</p>
      <ul>{ingredientArray}</ul>
    </main>
  );
}
