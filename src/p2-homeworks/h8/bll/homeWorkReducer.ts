import {ACTIONS_TYPE, ActionsType, PeopleType} from "../HW8";

export const homeWorkReducer = (state: Array<PeopleType>, action: ActionsType): Array<PeopleType> => {
  switch (action.type) {
    case ACTIONS_TYPE.SORT: {
      return action.payload === 'up'
        ? [...state].sort((a, b) => a.name > b.name ? 1 : -1)
        : action.payload === 'down'
          ? [...state].sort((a, b) => a.name > b.name ? -1 : 1)
          : state
    }
    case ACTIONS_TYPE.CHECK: {
      return state.filter(man => man.age >= action.payload)
    }
    default:
      return state
  }
};