import React from 'react'

export function Book() {
  return (
    <div>
      <main className="page">
        <a href="/">
          <h2>The Tree of Yoga</h2>
        </a>
        <ul>
          <li className="author">B.K.S Iyengar</li>
          <li className="description">1995</li>
          <li className="ISBN">978-0007921270</li>
        </ul>
        <button className="button">Add</button>
      </main>
    </div>
  )
}
