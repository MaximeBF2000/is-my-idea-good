import { initialState } from './Store.initState'

export const storeReducer = (state = initialState, action = {}) => {
  const { type, payload } = action

  switch (type) {
    default:
      return state
  }
}
