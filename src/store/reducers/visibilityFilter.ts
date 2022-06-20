import { TodosActionsTypes, FilterActionTypes } from '../../types/data'
import { actionFilters } from '../../store/actions'

const initialState = actionFilters.ALL

export const visibilityFilter = (
  state = initialState,
  action: FilterActionTypes
) => {
  switch (action.type) {
    case TodosActionsTypes.SET_FILTER:
      return action.payload.filter

    default: {
      return state
    }
  }
}
