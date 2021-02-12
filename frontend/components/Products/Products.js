import { useQuery } from "@apollo/client";
import { Product } from "./Procuct/Product";
import { ALL_PRODUCTS_QUERY } from "./queries";
import { ProductsList } from "./styled";

export const Products = () => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);

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
