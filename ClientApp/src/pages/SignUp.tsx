import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { APIError, NewUserType } from '../types'

async function submitNewUser(newUser: NewUserType) {
  const response = await fetch('/api/Users', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newUser),
  })

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

export function SignUp() {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')

  const [newUser, setNewUser] = useState<NewUserType>({
    fullName: '',
    email: '',
    password: '',
  })

  const createUserMutation = useMutation(
    (newUser: NewUserType) => submitNewUser(newUser),
    {
      onSuccess: function () {
        navigate('/')
      },
      onError: function (error: APIError) {
        setErrorMessage(Object.values(error.errors).join('. '))
      },
    }
  )

  function handleStringFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...newUser, [fieldName]: value }

    setNewUser(updatedUser)
  }

  return (
    <main className="page">
      <nav>
        {/* <a href="/">
          <i className="fa fa-home"></i>
        </a> */}
        <div className="form-title">
          <Link to="/signin">
            <h2 className="faded">sign in</h2>
          </Link>
          <h2 className="subhead" id="up">
            sign up
          </h2>
        </div>
      </nav>

      <form
        onSubmit={function (event) {
          event.preventDefault()
          createUserMutation.mutate(newUser)
        }}
      >
        {errorMessage ? <p className="form-error">{errorMessage}</p> : null}
        <div className="entry-form">
          <p className="form-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="fullName"
              value={newUser.fullName}
              onChange={handleStringFieldChange}
            />
          </p>
          <p className="form-input">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleStringFieldChange}
            />
          </p>
          <p className="form-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={newUser.password}
              onChange={handleStringFieldChange}
            />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </div>
      </form>
    </main>
  )
}
