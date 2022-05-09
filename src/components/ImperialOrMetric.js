import React from "react";

export default function ImperialOrMetric(props) {
  // const [imperialOrMetric, setImperialOrMetric] = React.useState("");

  // function handleChange(event) {
  //   setImperialOrMetric(event.target.value);
  // }

  return (
    <fieldset>
      <legend>Imperial Or Metric</legend>
      <p>
        <input
          type="radio"
          id="imperial"
          name="imperialOrMetric"
          value="imperial"
          checked={props.formData.imperialOrMetric === "imperial"}
          onChange={props.handleChange}
        />
        <label htmlFor="imperial">Imperial</label>
      </p>
      <p>
        <input
          type="radio"
          id="metric"
          name="imperialOrMetric"
          value="metric"
          checked={props.formData.imperialOrMetric === "metric"}
          onChange={props.handleChange}
        />
        <label htmlFor="metric">Metric</label>
      </p>
    </fieldset>
  );
}
