import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import Routes from './Routes';

const cache = new InMemoryCache();

let uri = 'http://localhost:8080/graphql';

if (process.env.NODE_ENV === 'production') {
  uri = '/graphql';
}


const link = createHttpLink({ uri });

const client = new ApolloClient({ cache, link });

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;
