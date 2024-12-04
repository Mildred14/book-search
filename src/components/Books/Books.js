import React from "react";
import "./book.scss"
import notImage from '../../assets/images/not-book-found.png'

export const Books = ({ info: {data, isPending, error }, emptySearch}) => {
  console.log("DATA", data)
  console.log("isPending", isPending)

  const result = () => {
    return data?.items.map((book, index) => {
      const imgThumbanail = book.volumeInfo?.imageLinks?.thumbnail ? book.volumeInfo?.imageLinks?.thumbnail : notImage

      return (
        <div className="book">
          <div className="img-info">
            <img src={imgThumbanail} className="thumbnail"/>
          </div>
          <h3 className="title" data-testid={`book-${index}`}>{book.volumeInfo.title}</h3>
        </div>
      )
    })
  }

  return(
    <>
      <div className="books">
        {emptySearch ? (
          <div className="emptySearch">
            <img src={notImage} />
            <h1>Type something</h1>
          </div>
        ) :
          (!isPending && data !== undefined) && result()
        }
      </div>
    </>
  )
}