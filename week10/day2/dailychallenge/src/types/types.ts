export interface Recipe {
  id: number
  name: string
  cuisine: string
}

export interface DataState {
  data: Recipe[]
  loading: boolean
  error: string | null
}