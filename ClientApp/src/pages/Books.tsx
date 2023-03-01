import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

import { BookType } from '../types'
import { SingleBookFromList } from '../components/SingleBookFromList'
import { SingleItemFromInventory } from '../components/SingleItemFromInventory'
import { authHeader } from '../auth'

export function Books() {
  const [filterText, setFilterText] = useState('')

  const { data: books = [] } = useQuery<BookType[]>(
    ['books', filterText],
    async function () {
      const response = await fetch(
        filterText.length === 0
          ? '/api/books'
          : `/api/books?filter=${filterText}`,
        {
          headers: {
            'content-type': 'application/json',
            Authorization: authHeader(),
          },
        }
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
            <Link to="/books/new">
              <button className="items-button new">new</button>
            </Link>
          </li>
        </ul>
        {/* </div> */}
      </section>
    </>
  )
}
