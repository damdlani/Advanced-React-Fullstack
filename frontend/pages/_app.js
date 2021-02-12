import NProgress from "nprogress";
import "../components/styles/nprogress.css";
import Router from "next/router";
import { ApolloProvider } from "@apollo/client";
import { Page } from "../components/Page/Page";
import withData from "../lib/withData";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
};

//below if for the Next to know it has to fetch query data before rendering
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};
/* if any of the pages will have getInitialProps method on them 
(withData will give it to them so they will have) then wait and fetch it */

export default withData(MyApp);
