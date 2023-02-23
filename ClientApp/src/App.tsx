import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

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

import { SmallGrid } from './pages/SmallGrid'
// import { NewItems } from './pages/NewItems'

export function App() {
  function handleLogout() {
    logout()

    window.location.assign('/')
  }
  const user = getUser()
  return (
    <>
      <div className="bg-img">
        <div className="container">
          <header>
            {isLoggedIn() ? (
              <li className="avatar">
                <img
                  src={avatar}
                  alt={`${user.fullName} Avatar`}
                  height="64"
                  width="64"
                />
              </li>
            ) : null}
            {isLoggedIn() ? (
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
            ) : null}
            <div className="top">
              <Link to="/">
                <i className="fa fa-home"></i>
              </Link>
              {isLoggedIn() ? (
                <p>welcome back, {user.fullName}!</p>
              ) : (
                <p>Welcome</p>
              )}
            </div>
            <section>
              <h1>everything</h1>
              <p id="no-bg"> ...in it's right place</p>
            </section>{' '}
          </header>
          {isLoggedIn() ? <h1>Access & Create</h1> : null}
          <section className="first-contact">
            <div className="categories">
              <ul id="nested">
                {' '}
                {/* shouldn't this be able to be refactored? */}
                {isLoggedIn() ? (
                  <Link to="#">
                    <li className="items-button">props</li>
                  </Link>
                ) : null}
                {isLoggedIn() ? (
                  <Link to="/magazines">
                    <li className="items-button">mags</li>
                  </Link>
                ) : null}
                {isLoggedIn() ? (
                  <Link to="/books">
                    <li className="items-button">books</li>
                  </Link>
                ) : null}
                {isLoggedIn() ? (
                  <Link to="#">
                    <li className="items-button">new</li>
                  </Link>
                ) : null}
              </ul>
              {isLoggedIn() ? (
                <Link to="/">
                  <div className="large"> Last edited</div>
                </Link>
              ) : null}
            </div>
          </section>
          {/* <Books /> */}
          <Routes>
            {/* <Route path="/" element={<Inventory title={title} />}></Route> */}
            <Route index element={<Landing />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/new" element={<BooksEntry />} />
            <Route path="/books/:id" element={<Book />} />
            <Route path="/magazines" element={<Magazines />} />
            <Route path="/magazines/new" element={<MagazinesEntry />} />
            <Route path="/Magazines/:id" element={<Magazine />} />
          </Routes>
        </div>

        {/* <NewItems /> */}

        {/* <SmallGrid /> */}
        {/* </div>{' '} */}
        <footer>by Amheiser</footer>
      </div>
    </>
  )
}
