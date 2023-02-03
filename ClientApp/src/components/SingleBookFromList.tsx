import React from 'react'
import { BookType } from '../types'

export function SingleBookFromList(props: SingleBookFromListProps) {
  return (
    <li key={props.book.id}>
      <button className="items-button">{props.book.title}</button>
    </li>
  )
}
type SingleBookFromListProps = {
  book: BookType
}