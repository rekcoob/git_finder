import React, { createContext, useReducer, ReactNode } from 'react'
import { alertReducer } from './alertReducer'
import { AlertStateType, AlertActionType } from './alertTypes'

// Initial state must match the reducer's expected state type
const initialState: AlertStateType | null = null

const AlertContext = createContext<{
  alert: AlertStateType | null
  dispatch: React.Dispatch<AlertActionType>
}>({
  alert: initialState,
  dispatch: () => null,
})

// Define the type for the provider's props, including children
interface AlertProviderProps {
  children: ReactNode
}

const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  // Specify type arguments for useReducer to resolve type compatibility issues
  const [state, dispatch] = useReducer<
    React.Reducer<AlertStateType | null, AlertActionType>
  >(alertReducer, initialState)

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        dispatch,
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export { AlertContext, AlertProvider }
