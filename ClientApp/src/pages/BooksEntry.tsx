import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import svg3 from '/src/images/64919D_curve_sin.svg'

import { BookType } from '../types'
import { useNavigate } from 'react-router'

async function submitNewBook(bookToCreate: BookType) {
  const response = await fetch('/api/books', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(bookToCreate),
  })

  return response.json()
}

export function BooksEntry() {
  const navigate = useNavigate()
  const [newBook, setNewBook] = useState<BookType>({
    id: undefined,
    title: '',
    author: '',
    publisher: '',
    publicationDate: '',
    ISBN: '',
    quantity: '',
    nickName: '',
  })
  const createNewBook = useMutation(submitNewBook, {
    onSuccess: function () {
      navigate('/books')
    },
  })

  function handleStringFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedBook = { ...newBook, [fieldName]: value }

    setNewBook(updatedBook)
  }

  return (
    // <----->
    <>
      <section className="form">
        {/* <img src={svg3} className="layer1" alt="wave" /> */}

        <nav className="nav">
          <Link to="/books">
            <p>BOOKS</p>
          </Link>
        </nav>
        {/* must use prevent default with <form> */}
        <form
          onSubmit={(event) => {
            event.preventDefault()
            createNewBook.mutate(newBook)
          }}
        >
          <div className="entry-form">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <textarea
                id="title"
                name="title"
                value={newBook.title}
                onChange={handleStringFieldChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <textarea
                id="author"
                name="author"
                value={newBook.author}
                onChange={handleStringFieldChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="publisher">Publisher</label>
              <textarea
                id="publisher"
                name="publisher"
                value={newBook.publisher}
                onChange={handleStringFieldChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="publicationDate">Publication Date</label>
              <textarea
                id="publicationDate"
                name="publicationDate"
                value={newBook.publicationDate}
                onChange={handleStringFieldChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ISBN">ISBN</label>
              <textarea
                id="ISBN"
                name="ISBN"
                value={newBook.ISBN}
                onChange={handleStringFieldChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <textarea
                id="quantity"
                name="quantity"
                value={newBook.quantity}
                onChange={handleStringFieldChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="nickName">Nick-Name</label>
              <textarea
                id="nickName"
                name="nickName"
                value={newBook.nickName}
                onChange={handleStringFieldChange}
              />
            </div>
            <div className="form-group">
              <button className="submit">submit</button>
            </div>
          </div>
        </form>
      </section>
      {/* id: number
  title: string
  author: string
  description: string
  ISBN: string */}
    </>
  )
}
