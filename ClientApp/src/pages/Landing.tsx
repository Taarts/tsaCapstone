import React from 'react'
import { Routes, Route } from 'react-router-dom'

export function Landing() {
  return (
    <>
      <section className="sec-row-grid">
        {/* <section className="landing"> */}
        <nav className="nav">
          <p className="subhead" Link to="SignIn">
            SIGN IN
          </p>
          <p className="subhead">SIGN UP</p>
        </nav>
        {/* </section> */}
      </section>
    </>
  )
}
