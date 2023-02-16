import React from 'react'
import { Link } from 'react-router-dom'
import { MagazineType } from '../types'

export function SingleMagazineFromList(props: SingleMagazineFromListProps) {
  return (
    <li>
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
