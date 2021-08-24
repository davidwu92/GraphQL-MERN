import React from 'react'

//allows us to use queries from utils/queries
import {useQuery} from '@apollo/client'
import {QUERY_BOOKS} from '../utils/queries'

import BookList from '../components/BookList'

//grab data with QUERY_BOOKS, slap that into BookList component.

const Home = ()=>{

  // when query finishes, data will be returned from server (and stored in destructured data property)
  const {loading, data} = useQuery(QUERY_BOOKS);

  const bookData = data?.books || []; //if data exists, we'll store it into books. otherwise we'll assign an empty array.

  //with the loading property, we can conditionally render data based on whether or not there IS data to display.
  return (
    <main>
      <div>{ loading ? <div>Loading...</div>
      :
      <BookList books={bookData}></BookList>
      }</div>
    </main>
  )
}

export default Home