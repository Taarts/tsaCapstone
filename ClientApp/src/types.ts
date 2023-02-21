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
}

export type MagazineType = {
  id: number | undefined
  title: string
  volume: string
  issue: string
  publicationDate: string
  quantity: string
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

export type InventoryType = {
  id: number | undefined
  name: string
  books: BookType[]
  magazines: MagazineType[]
  // props: PropType[]
}

export type NewUserType = {
  fullName: string
  email: string
  password: string
}
export type LoginUserType = {
  email: string
  password: string
}

export type LoginSuccess = {
  token: string
  user: {
    id: number
    fullName: string
    email: string
  }
}
