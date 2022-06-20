import {
  ActionsCreatorsTypes,
  TodosActionsTypes,
  ITodo,
} from '../../types/data'

const initialState: ITodo = {
  data: [],
}

export const todosReducer = (
  state = initialState,
  action: ActionsCreatorsTypes
): ITodo => {
  switch (action.type) {
    case TodosActionsTypes.ADD_TODOS:
      return {
        data: [
          ...state.data,
          {
            id: Math.random(),
            text: action.payload,
            complete: false,
          },
        ],
      }

    case TodosActionsTypes.TOGGLE_TODOS:
      return {
        data: state.data.map(item =>
          item.id === action.payload
            ? { ...item, complete: !item.complete }
            : item
        ),
      }

    case TodosActionsTypes.CLEAR_COMPLETED_TODOS:
      return { data: state.data.filter(item => !item.complete) }

    default:
      return state
  }
}
