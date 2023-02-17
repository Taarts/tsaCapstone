import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

export function Landing() {
  return (
    <>
      {/* I want this below at sign-in/up only */}
      {/* <section className="sec-row-grid"> */}
      <section className="landing">
        <nav className="nav">
          
          {/* <Link to="signin">
            <p className="subhead">SIGN IN</p>
          </Link> */}
       
          <Link to="signup">
            <p className="subhead">SIGN UP</p>
          </Link>
        </nav>
        {/* </section> */}
      </section>
    </>
  )
}
