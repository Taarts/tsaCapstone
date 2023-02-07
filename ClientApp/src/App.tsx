import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import { Books } from './pages/Books'
import { SignIn } from './pages/SignIn'
import { Landing } from './pages/Landing'
import { BooksEntry } from './pages/BooksEntry'
import { Book } from './pages/Book'

// import { SmallGrid } from './pages/SmallGrid'
// import { NewItems } from './pages/NewItems'

import svg4 from './images/1920x1080.svg'

export function App() {
  return (
    <>
      <div className="bg-img">
        {/* <img src={svg4} className="layer1" alt="wave" /> */}
        <div className="container">
          <header>
            <p>welcome back, 'person' </p>
            <section>
              <h1>LOREM IPSUM DOLOR</h1>
              <p id="no-bg">everything in it's place</p>
            </section>{' '}
          </header>
          <section className="first-contact">
            <p>Access & Create</p>
            <div className="categories">
              <ul id="nested">
                {' '}
                <li className="items-button">props</li>
                <li className="items-button">mags</li>
                <li className="items-button">books</li>
                <Link to="#">
                  <li className="items-button">new</li>
                </Link>
              </ul>
              <div className="large">Last edited</div>
            </div>
          </section>

          {/* <Books /> */}
          <Routes>
            <Route index element={<Landing />} />
            <Route path="SignIn" element={<SignIn />} />
            {/* <Route path="SignUp" element={<SignUp />} /> */}
            <Route path="books" element={<Books />} />
            <Route path="BooksEntry" element={<BooksEntry />} />
            <Route path="/books/:id" element={<Book />} />
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
