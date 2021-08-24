//npm i @apollo/client graphql bootstrap reactstrap 
import React from 'react'

//grab all client-side gql functionality

import {
  ApolloProvider, //special type of React Component used to provide data to all other components.
  ApolloClient, //allows us to get that data when ready to use it.
  createHttpLink, //creates a link to backend
  InMemoryCache //stores results of gql queries in a normalized memory cache.
} from '@apollo/client';

import Home from './pages/Home'

const httpLink = createHttpLink({
  uri: "graphql"
});
//this is the link, but client server must be configured, too.

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App(){
  return(
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
          <div className="container flex-row justify-space-between-lg justy center align-center">
            <h1>GraphQL-MERN Library</h1>
          </div>
        </header>
        <div className="container">
          <Home/>
        </div>
      </div>
    </ApolloProvider>
  )
}

export default App