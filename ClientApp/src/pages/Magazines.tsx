import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

import { MagazineType } from '../types'
import { SingleMagazineFromList } from '../components/SingleMagazineFromList'

export function Magazines() {
  const [filterText, setFilterText] = useState('')

  const { data: magazines = [] } = useQuery<MagazineType[]>(
    ['magazines', filterText],
    async function () {
      const response = await fetch(
        filterText.length === 0
          ? '/api/magazines'
          : `/api/magazines?filter=${filterText}`
      )

      // react query does the waiting for you
      return response.json()
    }
  )

  console.log({ magazines }) // this data from the api is not showing up
  return (
    <>
      <section className="new-input">
        <nav className="nav">
          <form className="search">
            <label htmlFor="Magazines">MAGAZINES</label>
            <input
              type="text"
              placeholder="search..."
              value={filterText}
              onChange={function (event) {
                setFilterText(event.target.value)
              }}
            />
          </form>
        </nav>
        {/* </div> */}

        <ul className="results">
          {magazines.map(function (magazine) {
            return (
              <SingleMagazineFromList key={magazine.id} magazine={magazine} />
            )
          })}

          {/* adding new item to list (magazine) */}
          <li>
            <Link to="/magazines/new">
              <button className="items-button new">new</button>
            </Link>
          </li>
        </ul>
        {/* </div> */}
      </section>
    </>
  )
}
