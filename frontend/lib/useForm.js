import { useState, useEffect } from "react";

export const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join(" ");
  
  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  const onChangeHandle = (event) => {
    let { value, name, type, files } = event.target;

    if (type === "number") {
      value = parseInt(value);
    }

    if (type === "file") {
      [value] = files; 
      //take the first thing out of 'files' and stick it into a value
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  const clearForm = () => {
    const blankForm = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ""])
    );
    setInputs(blankForm);
  };

  const resetForm = () => {
    setInputs(initial);
  };

  return {
    inputs,
    onChangeHandle,
    onFormSubmit,
    clearForm,
    resetForm,
  };
};
