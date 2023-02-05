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
  ISBN: string
  quantity: string
  nickName: string
}

export type APIError = {
  errors: Record<string, string[]>
  status: number
  title: string
  traceId: string
  type: string
}

// export type CategoryType = {
//   name: string | undefined
// }
