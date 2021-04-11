import gql from "graphql-tag";

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY() {
    allProducts {
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;