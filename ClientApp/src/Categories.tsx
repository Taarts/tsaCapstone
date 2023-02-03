import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

import { CategoryType } from './types'
import { SingleCategoryFromList } from './components/SingleCategoryFromList'

export function Categories() {
  const [filterText, setFilterText] = useState('')

  const { data: categories = [] } = useQuery<CategoryType[]>(
    ['categories', filterText],
    async function () {
      const response = await fetch(
        filterText.length === 0
          ? '/api/categories'
          : `/api/categories?filter=${filterText}`
      )

      // react query does the waiting for you
      return response.json()
    }
  )

  console.log({ categories }) // this data from the api is not showing up
  return (
    <>
      <ul className="results">
        {categories.map(function (category) {
          return (
            <SingleCategoryFromList key={category.name} category={category} />
          )
        })}

        {/* adding new item to list (category) */}
        <li>
          <button className="items-button new">
            <Link to={`$/categoriesEntry`}>new</Link>
          </button>
        </li>
      </ul>
    </>
  )
}
