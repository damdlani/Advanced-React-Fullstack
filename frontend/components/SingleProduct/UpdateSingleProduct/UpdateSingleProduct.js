import { useMutation, useQuery } from "@apollo/client";
import { SINGLE_ITEM_QUERY, UPDATE_PRODUCT_MUTATION } from "../queries";
import Form from "../../styles/Form";
import DisplayError from "../../ErrorMessage";
import { useForm } from "../../../lib/useForm";
import { useEffect } from "react";

export const UpdateSingleProduct = ({ id }) => {
  const { data, error, loading } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });

  const [
    updateProduct,
    { loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);

  const {
    inputs,
    onChangeHandle,
    onFormSubmit,
    resetForm,
    clearForm,
  } = useForm(data?.Product);

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <Form
      onSubmit={async (e) => {
        //TODO: handle submit
        onFormSubmit(e);
        const { data: updateData } = await updateProduct({
          variables: {
            id,
            name: inputs.name,
            description: inputs.description,
            price: inputs.price,
          },
        });

        clearForm();
      }}
    >
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
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
        <button type="submit">Update product</button>
      </fieldset>
    </Form>
  );
};
