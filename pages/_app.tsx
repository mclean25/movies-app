import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import { useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [client, _] = useState<ApolloClient<any>>(
    new ApolloClient({
      uri: "/api/graphql",
      cache: new InMemoryCache(),
    })
  );
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
