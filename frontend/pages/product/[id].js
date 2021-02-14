import { SingleProduct } from "../../components/SingleProduct/SingleProduct";

const SingleProductPage = ({ query }) => {
  return <SingleProduct id={query.id} />
};

export default SingleProductPage;

/*
Next.js allows us to name a file accordingly to a pathname
and when a given pathname syntax matches the files structure
it passes the pathname query as a prop to component returned from the file


In this case I've created a product/[id].js and pathname for singleproduct 
page is .../product/id, so I can access the ID immediately

AMAZING
*/