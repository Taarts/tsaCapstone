import React from 'react'
import { Link } from 'react-router-dom'
import { BookType } from '../types'

export function SingleBookFromList(props: SingleBookFromListProps) {
  return (
    <li>
      {/* <h2>{props.book.title}</h2> */}
      <button className="items-button">
        <Link to={`/books/${props.book.id}`}>{props.book.id}</Link>{' '}
        {/* /\/\/\/\<--- why? */}
      </button>
    </li>
    // <button>edit</button>
  )
}
type SingleBookFromListProps = {
  book: BookType
}
