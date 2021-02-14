import { useMutation } from "@apollo/client";
import { useForm } from "../../lib/useForm";
import Router from "next/router";
import Form from "../styles/Form";
import DisplayError from "../ErrorMessage";
import { CREATE_PRODUCT_MUTATION } from "./queries";
import { ALL_PRODUCTS_QUERY } from "../Products/queries";

export const CreateProduct = () => {
  const {
    inputs,
    onChangeHandle,
    onFormSubmit,
    resetForm,
    clearForm,
  } = useForm({
    name: "",
    description: "",
    price: "",
    image: null,
  });

  const [createProduct, { loading, error }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
      //for the product list to be updated after creating a product
    }
  );

  return (
    <Form
      onSubmit={async (e) => {
        onFormSubmit(e);
        const { data } = await createProduct();
        resetForm();
        Router.push({
          pathname: `/product/${data.createProduct.id}`,
        });
        //go to created product's page
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          Image
          <input
            type="file"
            id="image"
            name="image"
            onChange={onChangeHandle}
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            required
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
            required
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
            required
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={onChangeHandle}
          />
        </label>
        <button type="submit">+ Add product</button>
      </fieldset>
    </Form>
  );
};
