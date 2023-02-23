import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { getUser, isLoggedIn, logout } from '../auth'
import avatar from '../images/avatar.png'

export function Landing() {
  const user = getUser()
  return (
    <>
      {/* I want this below at sign-in/up only */}
      {/* <section className="sec-row-grid"> */}
      <section className="landing">
        <nav className="nav">
          {isLoggedIn() ? null : (
            <Link to="signin">
              <p className="subhead">SIGN IN</p>
            </Link>
          )}
          {isLoggedIn() ? null : (
            <Link to="signup">
              <p className="subhead">SIGN UP</p>
            </Link>
          )}
        </nav>
      </section>
    </>
  )
}
