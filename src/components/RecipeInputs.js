import React from "react";

export default function Inputs(props) {
  // use to differentiate between recipe inputs?

  return (
    <div className="recipe-measured-ingredients__ingredient">
      <input
        type="number"
        placeholder="Qty."
        data-ingredient-index="0"
        className="quantity quantity-0"
        name="qty"
        onChange={props.handleIngredientChange}
        value={props.ingredientData.qty} // fix later
      />
      <select
        // name="measurement-type"
        // id="measurement-type"
        id="units"
        name="units"
        value={props.ingredientData.qty.units}
        onChange={props.handleIngredientChange}
        data-ingredient-index="0"
      >
        <optgroup label="Dry">
          <option value="">-- Choose --</option>
          <option value="cups">Cups</option>
          <option value="dashes">Dashes</option>
          <option value="ounces">Ounces</option>
          <option value="pinches">Pinches</option>
          <option value="tablespoons">Tablespoons</option>
          <option value="teaspoons">Teaspoons</option>
          <option value="pounds">Pounds</option>
          <option value="each">Each</option>
        </optgroup>
        <optgroup label="Liquids">
          <option value="cups">Cups</option>
          <option value="gallons">Gallons</option>
          <option value="fluid-ounces">Fluid Ounces</option>
          <option value="pints">Pints</option>
          <option value="quarts">Quarts</option>
          <option value="tablespoons">Tablespoons</option>
          <option value="teaspoons">Teaspoons</option>
        </optgroup>
      </select>
      <input
        type="text"
        id="ingredient-name"
        name="ingredient"
        placeholder="Ingredient Name"
        onChange={props.handleIngredientChange}
        value={props.ingredientData.ingredient}
        data-ingredient-index="0"
      />
      <input
        type="number"
        placeholder="Bulk Qty."
        id="bulk-weight"
        name="bulkQty"
        onChange={props.handleIngredientChange}
        value={props.ingredientData.bulkQty}
        data-ingredient-bulk-cost-index="0"
      />
      <select
        // name="measurement-type"
        name="bulkUnits"
        onChange={props.handleIngredientChange}
        value={props.ingredientData.bulkUnits}
        id="measurement-type"
        data-ingredient-bulk-cost-index="0"
      >
        <option value="">-- Choose --</option>
        <optgroup label="Dry">
          <option value="ounces">Ounces</option>
          <option value="pounds">Pounds</option>
          <option value="each">Each</option>
        </optgroup>
        <optgroup label="Liquids">
          <option value="cups">Cups</option>
          <option defaultValue="gallons">Gallons</option>
          <option value="fluid-ounces">Fluid Ounces</option>
        </optgroup>
      </select>
      <input
        type="number"
        placeholder="Bulk Cost"
        id="bulk-cost"
        name="bulkCost"
        onChange={props.handleIngredientChange}
        value={props.ingredientData.bulkCost}
        data-ingredient-bulk-cost-index="0"
      />
    </div>
  );
}
