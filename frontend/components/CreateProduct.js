import { useForm } from "../lib/useForm";
import Form from "./styles/Form";

export const CreateProduct = () => {
  const {
    inputs,
    onChangeHandle,
    onFormSubmit,
    resetForm,
    clearForm,
  } = useForm({
    image: "",
    name: "s",
    price: "1",
    description: "s",
  });

  return (
    <Form onSubmit={onFormSubmit}>
      <fieldset>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            id="image"
            name="image"
            onChange={onChangeHandle}
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={onChangeHandle}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            value={inputs.price}
            onChange={onChangeHandle}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="description"
            value={inputs.description}
            onChange={onChangeHandle}
          />
        </label>
        <button type="submit">+ Add product</button>
      </fieldset>
    </Form>
  );
};
