import React from "react";

export default function RecipeBasics(props) {
  const handleChange = props.handleChange;
  const formData = props.formData;

  return (
    <fieldset>
      <legend>Recipe Basics</legend>
      <p>
        <label htmlFor="recipe-name">Recipe Name</label>
        <input
          type="text"
          id="recipe-name"
          name="recipeName"
          onChange={handleChange}
          value={formData.recipeName}
        />
      </p>
      <p>
        <label htmlFor="recipe-notes">Notes</label>
        <textarea
          name="recipeNotes"
          id="recipe-notes"
          placeholder="random"
          onChange={handleChange}
          value={formData.recipeNotes}
        />
      </p>
      <p>
        <label htmlFor="original-recipe-serving-size">
          Original Recipe Serving Size
        </label>
        <input
          type="number"
          id="original-recipe-serving-size"
          name="recipeOriginalServingSize"
          placeholder="ignore if you only want costs"
          onChange={handleChange}
          value={formData.recipeOriginalServingSize}
        />
      </p>
      <p>
        <label htmlFor="new-recipe-serving-size">New Recipe Serving Size</label>
        <input
          type="number"
          id="new-recipe-serving-size"
          name="recipeNewServingSize"
          placeholder="ignore if you only want costs"
          onChange={handleChange}
          value={formData.recipeNewServingSize}
        />
      </p>
    </fieldset>
  );
}
