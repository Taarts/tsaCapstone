import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import { isLoggedIn, logout } from '../auth'

import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

export function Landing() {
  function handleLogout() {
    logout()

    window.location.assign('/')
  }
  return (
    <>
      {/* I want this below at sign-in/up only */}
      {/* <section className="sec-row-grid"> */}
      <section className="landing">
        <Outlet />
        {/* </section> */}
      </section>
    </>
  )
}
