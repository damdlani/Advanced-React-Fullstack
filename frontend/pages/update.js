import { UpdateSingleProduct } from "../components/SingleProduct/UpdateSingleProduct/UpdateSingleProduct";

const UpdatePage = ({query}) => {
  
  return (
    <div>
      
      <UpdateSingleProduct id={query.id}/>
    </div>
  );
};

export default UpdatePage;