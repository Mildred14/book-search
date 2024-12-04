import React, {useState} from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Searcher } from '../Searcher/Searcher'
import { Books } from '../Books/Books'

const queryClient = new QueryClient()

export const BookSearch = () => {
  const [information, setInformation] = useState({})
  const [ emptySearch, setEmptySearch ] = useState(true)
  return (
    <>
      <h1>Book Search</h1>
      <QueryClientProvider client={queryClient}>
        <Searcher info={setInformation} isEmptySearch={setEmptySearch} />
      </QueryClientProvider>
      <Books info={information} emptySearch={emptySearch}/>
    </>
  )
}