import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import svg3 from '/src/images/64919D_curve_sin.svg'

import { BookType } from '../types'

export function BooksEntry() {
  const { data: books = [] } = useQuery<BookType[]>('books', async function () {
    const response = await fetch('/api/Books')
    return response.json()
  })
  console.log({ books })
  return (
    // <----->
    <>
      <section className="form">
        {/* <img src={svg3} className="layer1" alt="wave" /> */}

        <nav className="nav">
          <p className="subhead">BOOKS</p>
        </nav>
        <div className="entry-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="author" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" />
          </div>
          <div className="form-group">
            <label htmlFor="ISBN">ISBN</label>
            <input type="text" id="ISBN" name="ISBN" />
          </div>
          <div className="form-group">
            <button className="submit">submit</button>
          </div>
        </div>
      </section>
      {/* id: number
  title: string
  author: string
  description: string
  ISBN: string */}
    </>
  )
}
