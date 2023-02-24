import { Link, Outlet } from 'react-router-dom'
// import { StyledNav } from '../components/StyledNav'

export function SharedLayout() {
  return (
    <>
      {/* <Navigation /> */}
      <section className="">
        <Outlet />
      </section>
    </>
  )
}
