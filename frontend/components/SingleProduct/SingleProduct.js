import { useQuery } from "@apollo/client";
import Head from 'next/head';
import { SINGLE_ITEM_QUERY } from "./queries";
import DisplayError from "../ErrorMessage";
import { ProductStyled } from "./styled";

export const SingleProduct = ({ id }) => {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { Product: item } = data;

  return (
    <ProductStyled>
      <Head>
        <title>Sick Fits | {item.name}</title>
      </Head>
      {/*above is for the browser tag title to change*/}
      <img
        src={item.photo.image.publicUrlTransformed}
        alt={item.photo.altText}
      ></img>
      <div className="details">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
    </ProductStyled>
  );
};
