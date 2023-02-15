import React from 'react'
import { Link } from 'react-router-dom'
import { MagazineType } from '../types'

export function SingleMagazineFromList(props: SingleMagazineFromListProps) {
  return (
    <li>
      {/* <h2>{props.magazine.title}</h2> */}
      <Link to={`/magazines/${props.magazine.id}`}>
        <button className="items-button">{props.magazine.title}</button>
      </Link>{' '}
    </li>
    // <button>edit</button>
  )
}
type SingleMagazineFromListProps = {
  magazine: MagazineType
}
