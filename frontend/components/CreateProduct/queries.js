import gql from "graphql-tag";

export const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    #define a variables and their types
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
        #photoimg is a separate type in my db, so i have to create it
        #and connect it with product
      }
    ) {
      id #after creating product, user will be routed to this product page
      name
      price
      description
    }
  }
`;
