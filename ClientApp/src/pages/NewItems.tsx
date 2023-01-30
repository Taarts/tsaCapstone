import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import svg1 from './images/64919D_sin.svg'

import { BookType } from '../types'

export function Books() {
  const { data: books = [] } = useQuery<BookType[]>('books', async function () {
    const response = await fetch('/api/Books')
    return response.json()
  })
  console.log({ books })
  return (
    <div className="new-input">
        <h1>Books</h1>
        <img src={svg1} className="layer1" alt="wave" />
      </div>
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


  )
}
