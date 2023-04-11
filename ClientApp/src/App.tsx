import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import format from 'date-fns/format'

import { Books } from './pages/Books'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Landing } from './pages/Landing'
import { BooksEntry } from './pages/BooksEntry'
import { Book } from './pages/Book'
import { Magazines } from './pages/Magazines'
import { Magazine } from './pages/Magazine'
import { MagazinesEntry } from './pages/MagazinesEntry'
import { Inventory } from './pages/Inventory'
import { getUser, isLoggedIn, logout } from './auth'
import avatar from './images/avatar.png'
import { LoggedInUser } from './types'
import { Location } from './pages/Location'
import logo from './images/logo-capstone.svg'
// import { SharedLayout } from './pages/SharedLayout'
// import { Dashboard } from './pages/Dashboard'

export function App() {
  const user = getUser()
  return (
    <>
      <div className="bg-img bg-color">
        <nav>{isLoggedIn() ? <LoggedInNav /> : <SignedOutNav />}</nav>
        <div className="container">
          <header>
            <section>
              <div className="title" data-spacing="refine">
                <img src={logo} alt="logo" height="135" width="330" />
              </div>
            </section>{' '}
          </header>
          {isLoggedIn() ? <h2>Access & Create</h2> : null}
          <section className="dashboard">
            <div className="categories">
              <ul id="nested">
                {' '}
                {isLoggedIn() ? (
                  <Link to="#" className="props">
                    <li className="items-button">props</li>
                  </Link>
                ) : null}
                {isLoggedIn() ? (
                  <Link to="/magazines" className="mags">
                    <li className="items-button">mags</li>
                  </Link>
                ) : null}
                {isLoggedIn() ? (
                  <Link to="/books" className="books">
                    <li className="items-button">books</li>
                  </Link>
                ) : null}
                {isLoggedIn() ? (
                  <Link to="#" className="new">
                    <li className="items-button">new</li>
                  </Link>
                ) : null}
              </ul>
              {isLoggedIn() ? (
                <Link to="/" className="nested-large">
                  <div className="large"> Last edited</div>
                </Link>
              ) : null}
            </div>
          </section>
          <Routes>
            {/* <Route path="/" element={<SharedLayout />} />
              <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route element={<Landing />}>
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>
            <Route path="/location" element={<Location />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/new" element={<BooksEntry />} />
            <Route path="/books/:id" element={<Book />} />
            <Route path="/magazines" element={<Magazines />} />
            <Route path="/magazines/new" element={<MagazinesEntry />} />
            <Route path="/Magazines/:id" element={<Magazine />} />
          </Routes>
        </div>

        <footer>
          <div className="content">by Amheiser</div>
        </footer>
      </div>
    </>
  )
}
function LoggedInNav() {
  function handleLogout() {
    logout()
    window.location.assign('/')
  }
  const user = getUser()

  return (
    <div className="top-container">
      <li className="avatar">
        <img
          src={avatar}
          alt={`${user.fullName} Avatar`}
          height="64"
          width="64"
        />
      </li>

      <div className="welcome">
        <a
          href="/"
          className="link"
          onClick={function (event) {
            event.preventDefault()
            handleLogout()
          }}
        >
          <p className="subhead">Sign out</p>
        </a>
        <Link to="/">
          <i className="fa fa-home"></i>
        </Link>

        <p className="top">
          welcome back, <a href={`mailto:${user.email}`}>{user.fullName}</a>!
        </p>
      </div>
    </div>
  )
}

function SignedOutNav() {
  return (
    <div className="top">
      <p>Welcome</p>
      <div className="form-title">
        <h3 className="nav">sign in</h3>
        <Link to="/signup">
          <h3 className="faded">sign up</h3>
        </Link>
      </div>
    </div>
  )
}
