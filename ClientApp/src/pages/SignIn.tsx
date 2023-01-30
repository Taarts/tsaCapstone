import React from 'react'

// import { Link } from 'react-router-dom'

export function SignIn() {
  console.log('SignIn')
  return (
    <div className="form">
      <form className="signIn">
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">sign in</button>
      </form>
    </div>
  )
}
