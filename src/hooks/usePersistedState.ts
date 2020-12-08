import { Dispatch, useEffect, useState, SetStateAction } from 'react'

type IResponse<T> = [
  T,
  Dispatch<SetStateAction<T>>
]

export function usePersistedState<T> (key: string, initialState: T): IResponse<T> {
  
  const [state, setState] = useState(() => {

    let storageValue = null
    if (process.browser) {
      storageValue = localStorage.getItem(key)
    }

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialState
    }

  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}