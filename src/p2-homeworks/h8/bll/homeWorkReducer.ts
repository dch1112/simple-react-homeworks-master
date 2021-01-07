export const homeWorkReducer = (state: any, action: any): any => {
  switch (action.type) {
    case "sort": {
      return action.payload === 'up'
        ? [...state].sort((a, b) => a.name > b.name ? 1 : -1)
        : action.payload === 'down'
          ? [...state].sort((a, b) => a.name > b.name ? -1 : 1)
          : state
    }
    case "check": {
      return [...state].filter(man => man.age >= action.payload)
    }
    default:
      return state
  }
};