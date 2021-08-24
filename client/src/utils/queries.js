//Specify files here.
import {gql} from '@apollo/client'

export const QUERY_BOOKS = gql `
  query books {
    books {
      _id
      title
      author
      pages
    }
  }
`
//client is making requests for these properties.
//we'll be reusing QUERY_BOOKS when we make synchronous request on client side.