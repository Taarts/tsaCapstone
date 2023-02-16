import React from 'react'
import { Link } from 'react-router-dom'
import { BookType } from '../types'

export function SingleBookFromList(props: SingleBookFromListProps) {
  return (
    <li>
      <Link to={`/books/${props.book.id}`}>
        <button className="items-button">{props.book.nickName}</button>
      </Link>{' '}
    </li>
    // <button>edit</button>
  )
}
type SingleBookFromListProps = {
  book: BookType
}
