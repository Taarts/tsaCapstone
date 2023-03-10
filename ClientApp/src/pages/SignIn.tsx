import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import { recordAuthentication } from '../auth'
import { APIError, LoginSuccess, LoginUserType } from '../types'
import { isLoggedIn, logout } from '../auth'

function handleLogout() {
  logout()

  window.location.assign('/')
}

async function loginUser(user: LoginUserType): Promise<LoginSuccess> {
  const response = await fetch('/api/Session', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user),
  })

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

export function SignIn() {
  const [errorMessage, setErrorMessage] = useState('')

  const [user, setUser] = useState<LoginUserType>({
    email: '',
    password: '',
  })

  const loginUserMutation = useMutation(loginUser, {
    onSuccess: function (apiResponse) {
      recordAuthentication(apiResponse)
      window.location.assign('/')
    },
    onError: function (error: APIError) {
      setErrorMessage(Object.values(error.errors).join(' '))
    },
  })

  function handleStringFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...user, [fieldName]: value }

    setUser(updatedUser)
  }
  if (isLoggedIn()) {
    return (
      <a
        href="/"
        className="link"
        onClick={function (event) {
          event.preventDefault()
          handleLogout()
        }}
      >
        <p className="subhead"></p>
        Sign out
      </a>
    )
  } else {
    return (
      <div className="entry-form">
        <div className="form-title">
          <h3 className="nav">sign in</h3>
          <Link to="/signup">
            <h3 className="faded">sign up</h3>
          </Link>
        </div>
        <form
          className="form-input"
          onSubmit={function (event) {
            event.preventDefault()

            loginUserMutation.mutate(user)
          }}
        >
          {errorMessage ? <p className="form-error">{errorMessage}</p> : null}
          <div className="entry-form">
            <p className="form-input">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={handleStringFieldChange}
              />
            </p>
          </div>
          <div className="entry-form">
            <p className="form-input">
              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={handleStringFieldChange}
              />
            </p>
          </div>

          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}
