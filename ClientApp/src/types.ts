import { CSSProperties } from 'react'

export interface CSSPropertiesWithClassName extends CSSProperties {
  className?: string
}
export type BookType = {
  id: number | undefined
  title: string
  author: string
  publisher: string
  publicationDate: string
  isbn: string
  quantity: string
  nickName: string
  // user: LoggedInUser
}

export type MagazineType = {
  id: number | undefined
  title: string
  volume: string
  issue: string
  publicationDate: string
  quantity: string
  // user: LoggedInUser
}

// export type PropType = {
// id: number | undefined
// title: string
// propType: string
// quantity: string
// value: string
// }

export type APIError = {
  errors: Record<string, string[]>
  status: number
  title: string
  traceId: string
  type: string
}

export type LocationType = {
  id: number | ''
  locationName: string
  address: string
  latitude: number
  longitude: number
  telephone: string
  // user: {
  //   id: number
  //   fullName: string
  //   email: string
  // }
}

// export type InventoryType = {
//   id: number | undefined
//   name: string
//   books: BookType[]
//   magazines: MagazineType[]
//   // props: PropType[]
// }

export type NewUserType = {
  fullName: string
  email: string
  password: string
}
export type LoginUserType = {
  email: string
  password: string
}
export type LoggedInUser = {
  id: number
  fullName: string
  email: string
}
export type LoginSuccess = {
  token: string
  user: LoggedInUser
}
