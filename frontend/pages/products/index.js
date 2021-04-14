import { useRouter } from "next/dist/client/router";
import { Pagination } from "../../components/Pagination/Pagination";
import { Products } from "../../components/Products/Products";

const ProductsPage = () => {
  const { query } = useRouter();
  const page = parseInt(query.page);

  return (
    <div>
      <Pagination page={page || 1} />
      <Products />
      <Pagination page={page || 1} />
    </div>
  );
};

export default ProductsPage;
