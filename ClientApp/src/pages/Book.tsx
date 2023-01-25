import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { BookType } from '../types'

export function Book() {
  // const [booksGet, setBooksGet] = useState<BookType[]>([])
  // const [newBook, setNewBook] = useState('')

  // async function handleCreateNewBook() {
  //   const response = await fetch('/api/tsaCapstone', {
  //     method: 'POST',
  //     name: newBook,
  //   })
  //   const newBook = await response.json()
  // }

  return (
    <div>
      <main className="page">
        <a href="/">
          <h2>The Tree of Yoga</h2>
        </a>
        <ul>
          <li className="author">B.K.S Iyengar</li>
          <li className="description">1995</li>
          <li className="ISBN">978-0007921270</li>
        </ul>
        <h3>Add another {'$Category'}</h3>
        <form
          onSubmit={function (event) {
            event.preventDefault()
            // handleCreateNewBook()
          }}
        >
          <input
            type="text"
            placeholder="Title"
            value={newBook}
            onChange={function (event) {
              setNewBook(event.target.value)
            }}
          />{' '}
        </form>
        <article>
          {books.map(function (booksGet) {
            return (
              <ul key={booksGet.id}>
                <Link to={`./Book/${booksGet.id}`}>
                  <li className="name-text">{booksGet.name}</li>
                </Link>
                {/* <p>{book.name}</p> */}
              </ul>
            )
          })}
          <button onClick={handleCreateNewBook}>Add</button>
        </article>
      </main>
    </div>
  )
}
