import { useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import PaginationStyles from "../styles/PaginationStyles";
import { PAGINATION_QUERY } from "./queries";
import DisplayError from "../ErrorMessage";
import { perPage } from "../../config";

export const Pagination = ({ page }) => {
  const { data, loading, error } = useQuery(PAGINATION_QUERY);
  
  const count = data?._allProductsMeta.count;
  const pageCount = Math.ceil(count / perPage);

  if (loading) return "";
  if (error) return <DisplayError error={error} />;

  return (
    <PaginationStyles>
      <Head>
        <title>Sick Fits - Page {page} of {pageCount}</title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page === 1}>&larr; Prev</a>
      </Link>
      <p>Page {page} of {pageCount}</p>
      <p>{count} Items Total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next &rarr;</a>
      </Link>
    </PaginationStyles>
  );
};
