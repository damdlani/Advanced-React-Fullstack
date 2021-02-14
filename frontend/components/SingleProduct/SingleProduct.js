import { useQuery } from "@apollo/client";
import { SINGLE_ITEM_QUERY } from "./queries";

export const SingleProduct = ({ id }) => {
  const { loading, error, data } = useQuery(SINGLE_ITEM_QUERY, {
    variables: id,
  });

  return (
    <p>
      I'm a product page with ID: {id}
    </p>
  );
};
