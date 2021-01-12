import {ActionsType, PeopleType} from "../HW8";

export const homeWorkReducer = (state: PeopleType, action: ActionsType): PeopleType => {
  switch (action.type) {
    case "sort": {
      return action.payload === 'up'
        ? [...state].sort((a, b) => a.name > b.name ? 1 : -1)
        : action.payload === 'down'
          ? [...state].sort((a, b) => a.name > b.name ? -1 : 1)
          : state
    }
    case "check": {
      return state.filter(man => man.age >= action.payload)
    }
    default:
      return state
  }
};