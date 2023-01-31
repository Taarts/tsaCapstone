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
    <div className="bg-everything">
      <div className="container">
        <header className="item-right">
          <p>welcome back, 'person' </p>
          <section>
            <h1>LOREM IPSUM DOLOR</h1>
          </section>
          <section>
            <p id="no-bg">everything in it's place</p>
          </section>{' '}
        </header>

        {/* <SignIn /> */}
        <Books />
        {/* <BooksEntry /> */}
      </div>
      {/* <img src={svg4} className="waves" id="--bottom" alt="wave" /> */}

      {/* <NewItems /> */}
      {/* <Landing /> */}

      {/* <SmallGrid /> */}
      {/* </div>{' '} */}
      <footer>by Amheiser</footer>
    </div>
  )
}
