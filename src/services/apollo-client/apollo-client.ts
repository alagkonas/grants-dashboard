import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache
} from "@apollo/experimental-nextjs-app-support";

const GRAPHQL_API_ENDPOINT = "http://localhost:8000/graphql";

export const { getClient, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: GRAPHQL_API_ENDPOINT
    })
  });
});