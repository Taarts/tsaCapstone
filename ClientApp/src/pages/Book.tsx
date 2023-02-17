import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'

import { SingleBookFromList } from '../components/SingleBookFromList'
import { BookType } from '../types'

async function loadOneBook(id: undefined | string) {
  if (!id) return null //this stops the app from looking for a "zero" result.
  const response = await fetch(`/api/books/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}
const NullBook: BookType = {
  id: undefined,
  title: '',
  author: '',
  publisher: '',
  publicationDate: '',
  isbn: '',
  quantity: '',
  nickName: '',
}
export function Book() {
  const { id } = useParams<{ id: string }>()

  const { data: book = NullBook } = useQuery<BookType>(['one-book', id], () =>
    loadOneBook(id)
  )

  return (
    <div className="One-list-item">
      <main className="page">
        <article>
          <a href="/">
            <i className="fa fa-home"></i>
          </a>
          {/* the link refuses to go to the  */}
          <Link to={`/books/${book.id}`}>
            <h2>{book.title}</h2>
          </Link>
          <ul>
            <li className="author"><b>Author:</b> {book.author}</li>
            <li className="publisher"><b>Publisher:</b> {book.publisher}</li>
            <li className="ISBN"><b>ISBN:</b> {book.isbn}</li>
          </ul>
          <hr />
          <button>edit</button>
          {/* <button>back</button> */}
        </article>
      </main>
    </div>
  )
}
