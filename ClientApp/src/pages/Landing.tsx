import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

export function Landing() {
  return (
    <>
      <section className="sec-row-grid">
        {/* <section className="landing"> */}
        <nav className="nav">
          <Link to="SignIn">
            <p className="subhead">SIGN IN</p>
          </Link>
          <Link to="SignUp">
            <p className="subhead">SIGN UP</p>
          </Link>
        </nav>
        {/* </section> */}
      </section>
    </>
  )
}
