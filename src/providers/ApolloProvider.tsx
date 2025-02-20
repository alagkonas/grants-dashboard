"use client";

import { createHttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  InMemoryCache,
  ApolloClient
} from "@apollo/experimental-nextjs-app-support";
import { setVerbosity } from "ts-invariant";
import { setContext } from "@apollo/client/link/context";
import { OrganizationContext } from "@/types/types";

const GRAPHQL_API_ENDPOINT = "http://localhost:8000/graphql";

setVerbosity("debug");

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

function makeClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
  });
}

export function ApolloProvider({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>);
}