import { Pagination } from "../components/Pagination/Pagination";
import { Products } from "../components/Products/Products"

const ProductsPage = () => {
  return (
  <div>
    <Pagination page={1} />
    <Products />
    <Pagination page={1} />
  </div>
  );
};

export default ProductsPage;