import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'

import { SingleMagazineFromList } from '../components/SingleMagazineFromList'
import { MagazineType } from '../types'

async function loadOneMagazine(id: undefined | string) {
  if (!id) return null //this stops the app from looking for a "zero" result.
  const response = await fetch(`/api/magazines/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}
const NullMagazine: MagazineType = {
  id: undefined,
  title: '',
  volume: '',
  issue: '',
  publicationDate: '',
  quantity: '',
}
export function Magazine() {
  const { id } = useParams<{ id: string }>()

  const { data: magazine = NullMagazine } = useQuery<MagazineType>(
    ['one-magazine', id],
    () => loadOneMagazine(id)
  )

  return (
    <div className="One-list-item">
      <main className="page">
        <article>
          <a href="/">
            <i className="fa fa-home"></i>
          </a>
          {/* the link refuses to go to the  */}
          <Link to={`/magazines/${magazine.id}`}>
            <h2>{magazine.title}</h2>
          </Link>
          <ul>
            <li className="volume">{magazine.volume}</li>
            <li className="issue">{magazine.issue}</li>
          </ul>
          <button>edit</button>
          {/* <button>back</button> */}
        </article>
      </main>
    </div>
  )
}
