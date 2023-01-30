import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import svg1 from '/src/images/64919D_sin.svg'

import { BookType } from '../types'

export function Books() {
  const { data: books = [] } = useQuery<BookType[]>('books', async function () {
    const response = await fetch('/api/Books')
    return response.json()
  })
  console.log({ books })
  return (
    // <----->
    <>
      <section>
        <div className="boxes">
          <div id="nested">
            {' '}
            <button className="items-button"></button>
            <button className="items-button"></button>
            <button className="items-button"></button>
            <button className="items-button">new</button>
          </div>
          <div className="large"></div>
        </div>
      </section>

      <section className="new-input">
        {/* <div className="teal"></div> */}
        {/* <img src={svg1} className="layer1" alt="wave" /> */}
        <div className="text-placement">
          <nav className="nav">
            <p className="subhead">BOOKS</p>
          </nav>
        </div>

        <div id="menu-items">
          <ul className="summary-list">
            <li>
              <Link to={`/book/$title`}>
                <button className="items-button"></button>
              </Link>
            </li>
            <Link to={`/book/$title`}>
              <button className="items-button"></button>
            </Link>
            <li>
              <Link to={`/book/$title`}>
                <button className="items-button"></button>
              </Link>
            </li>
            <li>
              <Link to={`/book/$title`}>
                <button className="items-button"></button>
              </Link>
            </li>
            <li>
              {/* <Link to={`/book/$title`}> */}

              <button className="items-button new">new</button>
              {/* </Link> */}
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
