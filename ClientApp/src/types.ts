import { CSSProperties } from 'react'

export interface CSSPropertiesWithClassName extends CSSProperties {
  className?: string
}
export type BookType = {
  id: number | undefined
  title: string
  author: string
  description: string
  ISBN: string
}

// export type CategoryType = {
//   name: string | undefined
// }
