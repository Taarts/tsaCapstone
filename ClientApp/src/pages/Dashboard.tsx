import { Outlet, Link } from 'react-router-dom'
import { isLoggedIn } from '../auth'
// import { StyledNav } from './components/StyledNav'

const Landing = () => {
  return (
    <>
      {isLoggedIn() ? <h1>Access & Create</h1> : null}
      <section className="dashboard">
        <div className="categories">
          <ul id="nested">
            {' '}
            {isLoggedIn() ? (
              <Link to="#">
                <li className="items-button">props</li>
              </Link>
            ) : null}
            {isLoggedIn() ? (
              <Link to="/magazines">
                <li className="items-button">mags</li>
              </Link>
            ) : null}
            {isLoggedIn() ? (
              <Link to="/books">
                <li className="items-button">books</li>
              </Link>
            ) : null}
            {isLoggedIn() ? (
              <Link to="#">
                <li className="items-button">new</li>
              </Link>
            ) : null}
          </ul>
          {isLoggedIn() ? (
            <Link to="/">
              <div className="large"> Last edited</div>
            </Link>
          ) : null}
        </div>
      </section>
    </>
  )
}
