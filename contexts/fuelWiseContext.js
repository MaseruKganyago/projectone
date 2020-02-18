import React, {useState, createContext, useContext} from 'react'

const FuelWiseContext = createContext()
const FuelWiseActionsContext = createContext()

/* eslint-disable */
const factoryUseContext = (title, context) => {
  return () => {
  const ctx = useContext(context)
    if (ctx === undefined) {
      throw new Error(`use${title}Context must be used withing a ${title}ContextProvider.`)
    }
    return ctx
  }
}
/* eslint-enable */

export const useFuelWiseContext = factoryUseContext('FuelWiseContext', FuelWiseContext)
export const useFuelWiseActionsContext = factoryUseContext('FuelWiseActionsContext', FuelWiseActionsContext)

const FuelWiseContextProvider = (props) => {
  const [isFuelWiseOn, setFuelWise] = useState(false)

  return (
      <FuelWiseContext.Provider value={isFuelWiseOn}>
        <FuelWiseActionsContext.Provider value={setFuelWise}>
        {props.children}
        </FuelWiseActionsContext.Provider>
      </FuelWiseContext.Provider>
  );
}

export default FuelWiseContextProvider