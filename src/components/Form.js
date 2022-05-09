import React from "react";
import RecipeInputs from "./RecipeInputs";
import RecipeBasics from "./RecipeBasics";
import ImperialOrMetric from "./ImperialOrMetric";
import TableHeaders from "./TableHeaders";
import FormButtons from "./FormButtons";
import { nanoid } from "nanoid";

export default function Form(props) {
  const { formData, handleChange, handleSubmit, handleIngredientChange } =
    props;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <RecipeBasics
        id={nanoid()}
        formData={formData}
        handleChange={handleChange}
      />
      <ImperialOrMetric
        id={nanoid()}
        formData={formData}
        handleChange={handleChange}
      />
      <fieldset className="recipe-inputs">
        <legend>Original Recipe Ingredients</legend>
        <TableHeaders />
        <RecipeInputs
          id={nanoid()}
          formData={formData}
          handleChange={handleChange}
          ingredientData={props.ingredientData}
          setIngredientData={props.setIngredientData}
          handleIngredientChange={handleIngredientChange}
        />
        <FormButtons />
      </fieldset>
      <button>TestSubmit</button>
    </form>
  );
}
