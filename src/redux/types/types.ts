export interface IUser {
  id: number
  is_active: boolean
  is_admin: boolean
  birth_date: string
  email: string
  phone_number: string
  first_name: string
  last_name: string
  middle_name: string
  // sex: "male" | "female" | "",
}

export interface IUserResponse {
  count: number
  result: IUser[]
}

export interface ILogin {
  email: string
  password: string
}

export interface ILoginResponse {
  access_token: string
  refresh_token: string
  status: string
}

export interface IRegistration {
  email: string
  first_name: string
  last_name: string
  middle_name: string
  password: string
  phone_number: string
}

export interface IRegistrationResponse {
  id: string
  status: "OK"
}

interface ILocation {
  latitude: number
  longitude: number
}

interface IOrderPassenger {
  first_name: string
  last_name: string
  middle_name: string
  direction: string
  email: string
}

export interface IOrder {
  id: number
  first_name: string
  last_name: string
  phone_number: string
  from: ILocation
  to: ILocation
  departure_time: string
  arrival_time: Date
  passengers: IOrderPassenger[]
  price: string
  status: string
  email: string
  created_at: string
  updated_at: string
}

export interface IOrdersReponse {
  orders: IOrder[]
  count: number
}

export interface IErrorResponse {
  code: number
  error: string
}

export interface IPort {
  id: number
  name: string
  latitude: string
  longitude: string
  created_at: string
  updated_at: string
}

export interface IPortNew {
  name: string
  latitude: number
  longitude: number
}

export interface IPortResponse {
  ports: IPort[]
  count: number
}

export interface IPrice {
  id: string
  price_value: string
  created_at: string
  updated_at: string
}

