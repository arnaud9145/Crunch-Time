export const SET_COURS = 'cours/SET_COURS'

const initialState = {
  cours: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COURS:
      console.log('SET COURS')
      let cours = state.cours.splice()
      console.log(cours)
      cours = []
      action.payload.forEach(c => {
        cours.push(c)
      })
      return { ...state, cours }
    default:
      return state
  }
}

export const setCours = cours => {
  return async (dispatch, getState) => {
    localStorage.setItem('cours', JSON.stringify(cours))
    dispatch({ type: SET_COURS, payload: cours })
  }
}

export const getCours = () => {
  return async (dispatch, getState) => {
    const cours = JSON.parse(localStorage.getItem('cours'))
    dispatch({ type: SET_COURS, payload: cours })
  }
}
