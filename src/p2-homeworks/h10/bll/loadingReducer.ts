enum ACTION_TYPES {
  SET_IS_LOADING = 'HW10/SET_IS_LOADING'
}

export type LoadingStateType = {
  isLoading: boolean
}

type LoadingActionType = {
  type: ACTION_TYPES.SET_IS_LOADING
  payload: {
    isLoading: boolean
  }
}

const initState: LoadingStateType = {
  isLoading: false
};

export type ActionTypes = LoadingActionType

export const loadingReducer = (state = initState, action: ActionTypes): LoadingStateType => { // fix any
  switch (action.type) {
    case ACTION_TYPES.SET_IS_LOADING: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
  type: ACTION_TYPES.SET_IS_LOADING,
  payload: {isLoading}
}); // fix any