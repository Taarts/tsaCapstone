import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import svg1 from '/src/images/64919D_sin.svg'

import { BookType } from '../types'
import { SingleBookFromList } from '../components/SingleBookFromList'

export function Books() {
  const { data: books = [] } = useQuery<BookType[]>('books', async function () {
    const response = await fetch('/api/Books')

    // react query does the waiting for you
    return response.json()
  })
  console.log({ books }) // this data from the api is not showing up
  return (
    // <----->
    <>
      <section className="first-contact">
        <p>Access & Create</p>
        <div className="categories">
          <ul id="nested">
            {' '}
            {/* pull the "category names" thro to map over these eventually  */}
            <li className="items-button">props</li>
            <li className="items-button">mags</li>
            <li className="items-button">books</li>
            <li className="items-button">new</li>
          </ul>
          <div className="large">Last edited</div>
        </div>
      </section>

      <section className="new-input">
        {/* <img src={svg1} className="layer1" alt="wave" /> */}
        <div className="text-placement">
          <nav className="nav">
            <p className="subhead">BOOKS</p>
          </nav>
        </div>

        {/* <div id="results"> */}
        <ul className="results">
          {books.map(function (book) {
            return <SingleBookFromList key={book.id} book={book} />
          })}
          <li>
            <button className="items-button new">
              <Link to={`$/BooksEntry`}>new</Link>
            </button>
          </li>
        </ul>
        {/* </div> */}
      </section>
    </>
  )
}
