import { useRouter } from "next/dist/client/router";
import { Pagination } from "../../components/Pagination/Pagination";
import { Products } from "../../components/Products/Products";

const ProductsPage = () => {
  const { query } = useRouter();
  const page = parseInt(query.page) || 1;

  return (
    <div>
      <Pagination page={page} />
      <Products page={page} />
      <Pagination page={page} />
    </div>
  );
};

export default ProductsPage;
