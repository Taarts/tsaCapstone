import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'

import { SingleBookFromList } from '../components/SingleBookFromList'
import { BookType } from '../types'

async function loadOneBook(id: string) {
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
  ISBN: '',
  quantity: '',
  nickName: '',
}
export function Book() {
  const { id } = useParams<{ id: string }>()

  const { data: book = NullBook } = useQuery<BookType>(
    ['one-book', id],
    () => loadOneBook(id) // <--- why?
  )

  return (
    <div className="One-list-item">
      <main className="page">
        <article>
          {/* the link refuses to go to the  */}
          <Link to={`/books/${book.id}`}>
            <h2>{book.title}</h2>
          </Link>
          <ul>
            <li className="author">{book.author}</li>
            <li className="publisher">{book.publisher}</li>
            <li className="ISBN">{book.ISBN}</li>
          </ul>
          <button>edit</button>
        </article>
      </main>
    </div>
  )
}
