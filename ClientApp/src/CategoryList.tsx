import React from 'react'
import { Link } from 'react-router-dom'

// import exampledata from './Models/exampledata.sql'

const categories = Object.entries(exampledata).map((element) => (
  <div>
    <p>{/* <Link to={`./Book/${element[0]}`}>{element[1].title}</Link> */}</p>
  </div>
))
// export Function CategoryList(props: CategoryListProps) {
//   return <div className="CategoryList">{categories}</div>
// }
