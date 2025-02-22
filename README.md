# Grants Dashboard

This is a [Next.js](https://nextjs.org) and [Apollo Client](https://www.apollographql.com/docs/react) demo project
bootstrapped with `create-next-app@latest` and `apollo-client-nextjs`.

## Tech Stack

- Next.js 15.1.x
- Apollo Client 3.13.x
- React 19.0.x
- TypeScript 5
- Tailwind 3.4.1
- Shadcn/ui

## Getting Started

First, install the necessary dependencies using `npm install` and then run the development server with `npm run dev`.

You will also need to have `grants-dashboard-api` running either using `npm` or `docker` (see
instructions [here](https://github.com/alagkonas/grants-dashboard-api)).

## API Reference

The project uses the Grants Dashboard API:

- Base dev URL: http://localhost:8000/graphql
- Documentation: https://github.com/alagkonas/grants-dashboard-api

## Application and Implementation Breakdown

- The implementation closely follows the provided `graphql schemas`, though some data is hardcoded. In a production
  environment, this data would be fetched from the backend.
- The multitenancy requirement, based on the schemas, is implemented at the organization level rather than the user
  level, though ideally both should support multitenancy.
- Multitenancy is handled through request headers, which are stored in client cookies and retrieved on the server via
  the `next/headers` package. While the schemas explicitly include fields to query `matches` by `organizationId`,
  multitenancy should be implemented more securely using request headers and cookies (similar to authentication).
- For data fetching, I implemented a preload-to-server approach (
  detailed [here](https://github.com/alagkonas/app-router-apollo-demo)). This enables data to be served to the client
  using Apollo Client. I chose this approach to leverage Apollo Client's cache, allowing seamless query refetching after
  mutations.
- To optimize user experience while streaming data from the server, I implemented `skeleton` components. For
  demonstration purposes, you can simulate slow network requests by uncommenting line 10 in
  `ResponsiveApplicationsCarousel` and line 8 in `ResponsiveKanban` (don't forget to comment them again).
- For the carousel components, `shadcn's` carousel is highly opinionated, so I created my own implementation using
  `embla-carousel` (the same package that radix-ui, which `shadcn` uses under the hood, relies on).