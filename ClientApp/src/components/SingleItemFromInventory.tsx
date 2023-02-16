import React from 'react'
import { Link } from 'react-router-dom'
import { InventoryType } from '../types'

export function SingleItemFromInventory(props: SingleItemFromInventoryProps) {
  return (
    <li>
      <Link to={`/inventories/${props.inventory.id}`}>
        {/* <button className="items-button">{props.inventory}</button> */}
      </Link>{' '}
    </li>
    // <button>edit</button>
  )
}
type SingleItemFromInventoryProps = {
  inventory: InventoryType
}
