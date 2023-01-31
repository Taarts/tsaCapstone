import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import svg1 from '/src/images/64919D_sin.svg'

import { BookType } from '../types'

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
      <section>
        <div className="categories">
          <div id="nested">
            {' '}
            <button className="items-button">props</button>
            <button className="items-button">mags</button>
            <button className="items-button">books</button>
            <button className="items-button">new</button>
          </div>
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
            return (
              <li key={book.id}>
                <h2 className="items-button">{book.title}</h2>
              </li>
            )
          })}
          <li>
            {/* <Link to={`/book/$title`}> */}
            <button className="items-button">TOY</button>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to={`/book/$title`}> */}
            <button className="items-button">BKS</button>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to={`/book/$title`}> */}
            <button className="items-button">YAM</button>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to={`/book/$title`}> */}

            <button className="items-button new">new</button>
            {/* </Link> */}
          </li>
        </ul>
        {/* </div> */}
      </section>
    </>
  )
}
