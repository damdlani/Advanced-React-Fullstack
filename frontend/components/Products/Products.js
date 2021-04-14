import { useQuery } from "@apollo/client";
import { perPage } from "../../config";
import { Product } from "./Product/Product";
import { ALL_PRODUCTS_QUERY } from "./queries";
import { ProductsList } from "./styled";

export const Products = ({ page }) => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: (page - 1) * perPage,
      first: perPage
    },
  });
 /*TODO: if it won't be done in course - keep track of scrollbar position 
  while routing between pages, so to always load them in the same position
 */
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ProductsList>
      {data.allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsList>
  );
};
