import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import { isLoggedIn, logout } from '../auth'

export function Landing() {
  function handleLogout() {
    logout()

    window.location.assign('/')
  }
  return (
    <>
      <section className="landing">
        <Outlet />
      </section>
    </>
  )
}
