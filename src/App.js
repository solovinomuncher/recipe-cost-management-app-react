import React from "react";
import "./App.css";
import Form from "./components/Form";
import RecipePrintout from "./components/RecipePrintout";

function App() {
  const [formData, setFormData] = React.useState({
    imperialOrMetric: "",
    recipeName: "",
    recipeNotes: "",
    recipeOriginalServingSize: "1",
    recipeNewServingSize: "1",
    // ingredientArray: [
    //   {
    //     qty: "0",
    //     units: "",
    //     ingredient: "",
    //     bulkQty: "0",
    //     bulkUnits: "gallons",
    //     bulkCost: "0",
    //   },
    // ],
  });

  const [ingredientData, setIngredientData] = React.useState({
    qty: "0",
    units: "",
    ingredient: "",
    bulkQty: "0",
    bulkUnits: "gallons",
    bulkCost: "0",
  });

  function handleIngredientChange(event) {
    const { name, value } = event.target;
    setIngredientData((oldIngredientData) => {
      return {
        ...oldIngredientData,
        [name]: value,
      };
    });
  }

  console.log(formData);
  console.log(ingredientData);

  const [recipePrintout, setRecipePrintout] = React.useState(false);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((oldFormData) => {
      return {
        ...oldFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setRecipePrintout(true);
  }

  return (
    <div className="App">
      <h1>Recipe Cost Management App</h1>
      <Form
        formData={formData}
        setFormData={setFormData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleIngredientChange={handleIngredientChange}
        ingredientData={ingredientData}
        setIngredientData={setIngredientData}
      />
      {recipePrintout && <RecipePrintout formData={formData} />}
      <footer>
        <p>
          <small>Copyright © by Erick Esqueda. All Rights Reserved.</small>
        </p>
      </footer>
    </div>
  );
}

export default App;
