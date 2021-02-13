enum ACTION_TYPES {
  SET_THEME = 'HW12/SET_THEME'
}

const initState = {
  theme: 'dark'
}

type InitStateType = typeof initState

type ActionTypes = ChangeThemeCType

export const themeReducer = (state: InitStateType = initState, action: ActionTypes): InitStateType => { // fix any
  switch (action.type) {
    case ACTION_TYPES.SET_THEME: {
      return {...state, ...action.payload}
    }
    default:
      return state
  }
}

export const changeThemeC = (theme: string): ChangeThemeCType => ({
  type:ACTION_TYPES.SET_THEME,
  payload: {theme}
}) // fix any

type ChangeThemeCType = {
  type:ACTION_TYPES.SET_THEME,
  payload: {theme: string}
}
