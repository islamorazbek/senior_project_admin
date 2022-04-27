

export interface ISubscribedUser {
  id: string
  user_id: string
  email: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface ISubscribedUsersResponse {
  count: number
  subscriptions: ISubscribedUser[]
}