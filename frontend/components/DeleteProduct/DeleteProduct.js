import { useMutation } from "@apollo/client";
import { DELETE_PRODUCT_MUTATION } from "./queries";
import { ALL_PRODUCTS_QUERY } from "../Products/queries";

export const DeleteProduct = ({ id, children }) => {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: {
      id,
    },
    refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
  });

  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => {
        if (confirm("You are about to delete an item. Are you sure?")) {
          deleteProduct().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </button>
  );
};
