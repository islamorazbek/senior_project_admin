
export interface IBlog {
  id: number
  title: string
  content: string
  image: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface IBlogNew {
  title: string
  content: string
  image: string
  is_active: boolean
}

export interface IBlogsReponse {
  blogs: IBlog[]
  count: number
}