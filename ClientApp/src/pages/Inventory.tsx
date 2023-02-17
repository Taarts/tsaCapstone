import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'

import { SingleItemFromInventory } from '../components/SingleItemFromInventory'
import { InventoryType } from '../types'

async function loadOneInventory(id: undefined | string) {
  if (!id) return null //this stops the app from looking for a "zero" result.
  const response = await fetch(`/api/inventories/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}
const NullInventory: InventoryType = {
  id: undefined,
  name: '',
  books: [],
  magazines: [],
  // pros: [],
}
export function Inventory() {
  const { id } = useParams<{ id: string }>()

  const { data: inventory = NullInventory } = useQuery<InventoryType>(
    ['one-inventory', id],
    () => loadOneInventory(id)
  )

  return (
    <div className="One-list-item">
      <main className="page">
        <article>
          <a href="/">
            <i className="fa fa-home"></i>
          </a>
          {/* the link refuses to go to the  */}
          <ul>
            <Link to={`/inventory/${inventory.id}`}>
              <li className="items-button">{inventory.name}</li>
            </Link>
            <li className="Quantity">{inventory.name.length}</li>
            {/* <li className="Magazines in Inventory">{inventory.magazines.length}</li> */}
          </ul>
          <hr />
          <button>edit</button>
          {/* <button>back</button> */}
        </article>
      </main>
    </div>
  )
}
