import { useMutation } from "@apollo/client";
import { DELETE_PRODUCT_MUTATION } from "./queries";
// import { ALL_PRODUCTS_QUERY } from "../Products/queries"; only for refetching queries

export const DeleteProduct = ({ id, children }) => {
  //keystone.js feature
  const update = (cache, payload) => {
    console.log(payload);
    console.log("running the update function after delete");
    cache.evict(cache.identify(payload.data.deleteProduct));
  }

  const [deleteProduct, { loading }] = useMutation(
    DELETE_PRODUCT_MUTATION, 
    {
    variables: { id },
    // refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],  
    //sometimes refetching from network is not the best case
    //deleting an item from apollo cache may be better
    update,
    }
  );

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
