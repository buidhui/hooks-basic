import React, { useState } from "react";
import PropTypes from "prop-types";

ToDoForm.propTypes = {
  onSubmit: PropTypes.func,
};

ToDoForm.defaultProps = {
  onSubmit: null,
};

function ToDoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleValueChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // Prevent realoading browser

    if (!onSubmit) return;

    const formValues = {
      title: value,
    };
    onSubmit(formValues);

    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleValueChange}
        placeholder="Enter something here"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ToDoForm;
