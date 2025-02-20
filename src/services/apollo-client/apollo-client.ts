import { createHttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache
} from "@apollo/experimental-nextjs-app-support";
import { setContext } from "@apollo/client/link/context";
import { OrganizationContext } from "@/types/types";

const GRAPHQL_API_ENDPOINT = "http://localhost:8000/graphql";

const httpLink = createHttpLink({
  uri: GRAPHQL_API_ENDPOINT
});

const authLink = setContext((_, { headers }) => {
  // ideally this should happen within a cookie and not in localstorage
  const stringifiedOrganization = localStorage.getItem("organization");
  const organization: OrganizationContext = stringifiedOrganization ? JSON.parse(stringifiedOrganization) : {
    id: "1",
    name: "whatever"
  };

  return {
    headers: {
      ...headers,
      "x-organization-id": organization.id,
      "x-organization-name": organization.name
    }
  };
});

export const { getClient, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
  });
});