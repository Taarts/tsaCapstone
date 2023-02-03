import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import svg1 from '/src/images/64919D_sin.svg'

import { BookType } from '../types'
import { SingleBookFromList } from '../components/SingleBookFromList'

export function Books() {
  const [filterText, setFilterText] = useState('')

  const { data: books = [] } = useQuery<BookType[]>(
    ['books', filterText],
    async function () {
      const response = await fetch(
        filterText.length === 0
          ? '/api/books'
          : `/api/books?filter=${filterText}`
      )

      // react query does the waiting for you
      return response.json()
    }
  )

  console.log({ books }) // this data from the api is not showing up
  return (
    // <-- Search function to return a book--->
    <>
      <section className="new-input">
        <nav className="nav">
          <form className="search">
            <label htmlFor="Books">BOOKS</label>
            <input
              type="text"
              placeholder="search..."
              value={filterText}
              onChange={function (event) {
                setFilterText(event.target.value)
              }}
            />
          </form>
        </nav>
        {/* </div> */}

        <ul className="results">
          {books.map(function (book) {
            return <SingleBookFromList key={book.id} book={book} />
          })}

          {/* adding new item to list (book) */}
          <li>
            <button className="items-button new">
              <Link to="/BooksEntry">new</Link>
            </button>
          </li>
        </ul>
        {/* </div> */}
      </section>
    </>
  )
}