import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Books } from './pages/Books'
import svg from './images/64919D_sin.svg'
// import { CategoryList } from './CategoryList'

export function App() {
  return (
    <div className="wrapper">
      <header>
        <p>welcome back, 'person' </p>
      </header>

      {/* <------ I think this should all be "Landing/Home.tsx" ----> */}
      <section>
        <h1 id="app-title">LOREM IPSUM DOLOR</h1>
      </section>
      <section>
        <p className="text-placement">everything in it's place</p>
      </section>
      {/* to here */}
      <section>
        <img src={svg} className="layer1" alt="wave" />
        {/* <div className="button-placement">
          <button>start</button>
        </div> */}
      </section>
      <Books />
      <footer>by Amheiser</footer>

      {/* <Books /> */}
    </div>
  )
}
