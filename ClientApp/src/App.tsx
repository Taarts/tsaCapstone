import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import { Books } from './pages/Books'
import { SignIn } from './pages/SignIn'
import { Landing } from './pages/Landing'
import { BooksEntry } from './pages/BooksEntry'
import { Book } from './pages/Book'
import { Magazines } from './pages/Magazines'
import { Magazine } from './pages/Magazine'
import { MagazinesEntry } from './pages/MagazinesEntry'
import { Inventory } from './pages/Inventory'

import { SmallGrid } from './pages/SmallGrid'
// import { NewItems } from './pages/NewItems'

import svg4 from './images/1920x1080.svg'

export function App() {
  return (
    <>
      <div className="bg-img">
        <div className="container">
          <header>
            <div className="top">
              <a href="/">
                <i className="fa fa-home"></i>
              </a>
              <p>welcome back, 'User' </p>
            </div>
            <section>
              <h1>LOREM IPSUM DOLOR</h1>
              <p id="no-bg">everything in it's place</p>
            </section>{' '}
          </header>
          <h1>Access & Create</h1>

          <section className="first-contact">
            <div className="categories">
              <ul id="nested">
                {' '}
                {/* shouldn't this be able to be refactored? */}
                <Link to="#">
                  <li className="items-button">props</li>
                </Link>
                <Link to="/magazines">
                  <li className="items-button">mags</li>
                </Link>
                <Link to="/books">
                  <li className="items-button">books</li>
                </Link>
                <Link to="#">
                  <li className="items-button">new</li>
                </Link>
              </ul>
              <Link to="/">
                <div className="large"> Last edited</div>
              </Link>
            </div>
          </section>

          {/* <Books /> */}
          <Routes>
            {/* <Route path="/" element={<Inventory title={title} />}></Route> */}
            <Route index element={<Landing />} />
            <Route path="SignIn" element={<SignIn />} />
            {/* <Route path="SignUp" element={<SignUp />} /> */}
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
