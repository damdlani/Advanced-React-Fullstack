import Link from "next/link";
import ProductItem from "../../styles/ItemStyles";
import Title from "../../styles/Title";
import PriceTag from "../../styles/PriceTag";
import { formatMoney } from "../../../lib/formatMoney";
import { DeleteProduct } from "../../DeleteProduct/DeleteProduct";

export const Product = ({ product }) => {
  const { name, photo, id, price, description } = product;

  return (
    <ProductItem>
      <img src={photo?.image?.publicUrlTransformed} alt={name}></img>
      <Title>
        <Link href={`product/${id}`}>{name}</Link>
      </Title>
      <PriceTag>{formatMoney(price)}</PriceTag>
      <p>{description}</p>
      <div className="buttonList">
        <Link
          href={{
            pathname: "update",
            query: {
              id,
            },
          }}
        >
          Edit ✏️
        </Link>
        <DeleteProduct id={id}>Delete</DeleteProduct>
      </div>
    </ProductItem>
  );
};
