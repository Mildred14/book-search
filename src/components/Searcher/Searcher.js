import React, { useState } from 'react'
import { useSearchParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import lupaImg from '../../assets/images/lupita.png'
import "./searcher.scss"

export const Searcher = ({info, isEmptySearch}) => {
  const [title, setTitle] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChanges = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (title !== '') {
      setSearchParams((searchParams) => {
        searchParams.set('book-title',  title)
        return searchParams
      })
      info({ data, isPending, error })
      isEmptySearch(false)
    }
    else {
      isEmptySearch(true)
    }
  }
  const bookTitle = searchParams.get('book-title')

  const { data, isPending, error } = useQuery({
    queryKey: [`booksearch.${bookTitle}.${title}`],
    queryFn: () => {
      return fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}`).then((res) => res.json())
    }
  })


  return (
    <>
      <form onSubmit={handleSubmit} data-testid="searcher-form" className='search-form'>
        <input type="text" data-testid="searcher-input" value={title} onChange={handleChanges} className='search-input' placeholder='Book title...'/>
        <button type="submit" className='search-btn'>
          <img src={lupaImg}/>
        </button>
      </form>
    </>
  )
}