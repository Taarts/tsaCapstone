import React from 'react'
import { Routes, Route } from 'react-router-dom'
import svg1 from '../images/64919D_sin.svg'
import svg2 from '../images/ADE4F2_sin.svg'

export function Landing() {
  return (
    <>
      <section className="sec-row-grid">
        <img src={svg2} alt="wave" className="layer2" />
        <p className="text-placement">everything in it's place</p>
      </section>

      <section className="landing">
        <div className="teal"></div>
        <img src={svg1} className="layer1" alt="wave" />
        <button className="button-styling">s t a r t</button>
      </section>
    </>
  )
}
