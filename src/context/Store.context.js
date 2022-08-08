import { createContext, useContext, useReducer } from 'react'
import { initialState } from './Store.initState'
import { storeReducer } from './Store.reducer'

export const StoreContext = createContext(initialState)

export const StoreProvider = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState)

  return (
    <StoreContext.Provider value={{ ...state, dispatch }} {...props}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
