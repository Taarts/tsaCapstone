import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Books } from './pages/Books'
import { SignIn } from './pages/SignIn'
import { Landing } from './pages/Landing'
import { BooksEntry } from './pages/BooksEntry'
// import { SmallGrid } from './pages/SmallGrid'
// import { NewItems } from './pages/NewItems'

import svg4 from './images/1920x1080.svg'
// import { CategoryList } from './CategoryList'

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
            </section>
            <section id="no-bg">
              <p>everything in it's place</p>
            </section>{' '}
          </header>

          {/* <SignIn /> */}
          <Books />
          {/* <BooksEntry /> */}
        </div>

        {/* <NewItems /> */}
        {/* <Landing /> */}

        {/* <SmallGrid /> */}
        {/* </div>{' '} */}
        <footer>by Amheiser</footer>
      </div>
    </>
  )
}
