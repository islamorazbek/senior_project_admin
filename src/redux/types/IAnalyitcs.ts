
export interface IAnalyitcsQuery {
  from?: string
  to?: string
}

export interface IEarningsResponse {
  earning: number
}

export interface ILocation {
  latitude: number,
  longitude: number,
  name: string
}

export interface IPopularDestination {
  location: ILocation
  popularity: number
}