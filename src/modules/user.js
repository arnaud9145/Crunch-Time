export const SET_NAME = 'user/SET_NAME'

const initialState = {
  name: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload }
    default:
      return state
  }
}

export const setName = name => {
  return async (dispatch, getState) => {
    localStorage.setItem('user-name', name)
    dispatch({ type: SET_NAME, payload: name })
  }
}

export const getName = () => {
  return async (dispatch, getState) => {
    const name = localStorage.getItem('user-name')
    dispatch({ type: SET_NAME, payload: name })
  }
}