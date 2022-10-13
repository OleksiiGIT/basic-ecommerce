import React, { createContext, useMemo, useReducer } from 'react'

type Action = {
    type: 'onAdd' | 'onRemove'
    payload: number
}
type Dispatch = (action: Action) => void
type State = {
    productsIds: number[]
}
type BasketProviderProps = {
    children: React.ReactNode
}

const BasketContext = createContext<
    { state: State; dispatch: Dispatch } | undefined
>(undefined)

function BasketReducer(state: State, { type, payload }: Action) {
    switch (type) {
        case 'onAdd': {
            return {
                ...state,
                //TODO: Replace by any lib like lodash
                productsIds: state.productsIds.concat([payload]),
            }
        }
        case 'onRemove': {
            //TODO: Replace by any lib like lodash
            const newState = state.productsIds.concat()
            const valueIndex = state.productsIds.indexOf(payload)
            if (valueIndex > -1) {
                newState.splice(valueIndex, 1)
            }
            return {
                ...state,
                productsIds: newState,
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${type}`)
        }
    }
}

function BasketContextProvider({ children }: BasketProviderProps) {
    const [state, dispatch] = useReducer(BasketReducer, {
        productsIds: [],
    })

    const value = { state, dispatch }
    return (
        <BasketContext.Provider value={value}>
            {children}
        </BasketContext.Provider>
    )
}

function useBasket() {
    const context = React.useContext(BasketContext)
    if (context === undefined) {
        throw new Error('useBasket must be used within a BasketContextProvider')
    }

    return useMemo(
        () => ({
            productsIds: context.state.productsIds,
            onAdd: (payload: number) =>
                context.dispatch({ type: 'onAdd', payload }),
            onRemove: (payload: number) =>
                context.dispatch({ type: 'onRemove', payload }),
        }),
        [context.state]
    )
}

export { BasketContextProvider, useBasket }
