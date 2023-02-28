import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { Link } from 'react-router-dom'

import { MagazineType } from '../types'
import { APIError } from '../types'
import { useNavigate } from 'react-router'
import { authHeader } from '../auth'

async function submitNewMagazine(magazineToCreate: MagazineType) {
  const response = await fetch('/api/magazines', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: authHeader(),
    },
    body: JSON.stringify(magazineToCreate),
  })
  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

export function MagazinesEntry() {
  const navigate = useNavigate()
  const [newMagazine, setNewMagazine] = useState<MagazineType>({
    id: undefined,
    title: '',
    volume: '',
    issue: '',
    publicationDate: '',
    quantity: '',
  })

  const [errorMessage, setErrorMessage] = useState('')

  const createNewMagazine = useMutation(submitNewMagazine, {
    onSuccess: function () {
      navigate('/magazines')
    },
    onError: function (apiError: APIError) {
      const newMessage = Object.values(apiError.errors).join(' ')
    },
  })

  function handleStringFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedMagazine = { ...newMagazine, [fieldName]: value }

    setNewMagazine(updatedMagazine)
  }

  return (
    // <----->
    <>
      <section className="form">
        <nav className="nav">
          <Link to="/magazines">
            <p>MAGAZINES</p>
          </Link>
        </nav>

        {errorMessage ? <p className="form-error">{errorMessage}</p> : null}
        <form
          onSubmit={(event) => {
            event.preventDefault()
            createNewMagazine.mutate(newMagazine)
          }}
        >
          <div className="entry-form">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <textarea
                required
                id="title"
                name="title"
                value={newMagazine.title}
                onChange={handleStringFieldChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="volume">Volume</label>
              <textarea
                id="volume"
                name="volume"
                value={newMagazine.volume}
                onChange={handleStringFieldChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="issue">Issue</label>
              <textarea
                id="issue"
                name="issue"
                value={newMagazine.issue}
                onChange={handleStringFieldChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="publicationDate">Publication Date</label>
              <textarea
                id="publicationDate"
                name="publicationDate"
                value={newMagazine.publicationDate}
                onChange={handleStringFieldChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <textarea
                id="quantity"
                name="quantity"
                value={newMagazine.quantity}
                onChange={handleStringFieldChange}
              />
            </div>

            <div className="form-group">
              <button className="submit">submit</button>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}
