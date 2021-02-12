import { useState } from "react";

export const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial);

  const onChangeHandle = (event) => {
    let { value, name, type, files } = event.target;

    if (type === "number") {
      value = parseInt(value);
    }

    if (type === "file") {
      value[0] = files;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

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
    clearForm,
    resetForm,
  };
};
