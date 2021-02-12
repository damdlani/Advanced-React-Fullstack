import { useForm } from "../lib/useForm";

export const CreateProduct = () => {
  const { inputs, onChangeHandle, resetForm, clearForm } = useForm({
    name: "s",
    price: "1",
    description: "s",
  });

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nameee"
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
      <button type="button" onClick={clearForm}>
        clear
      </button>
      <button type="button" onClick={resetForm}>
        reset
      </button>
    </form>
  );
};
