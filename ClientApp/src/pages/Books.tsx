import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

import { BookType } from '../types'

export function Books() {
  const { data: books = [] } = useQuery<BookType[]>('books', async function () {
    const response = await fetch('/api/Books')
    return response.json()
  })
  console.log({ books })
  return (
    // <---search-->

    <div className="text-placement">
      <nav className="nav">
        <p className="subhead">BOOKS</p>
      </nav>

      <div id="menu-items">
        <ul className="item-list">
          <li>
            <Link to={`/book/$title`}>
              <button className="items-button"></button>
            </Link>
          </li>
          <Link to={'/book'}>
            <button className="items-button"></button>
          </Link>
          <li>
            <Link to={'/book'}>
              <button className="items-button"></button>
            </Link>
          </li>
          <li>
            <Link to={'/book'}>
              <button className="items-button"></button>
            </Link>
          </li>
          <li>
            {/* <Link to={'/book'}> */}

            <button className="items-button">new</button>
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </div>
  )
}
