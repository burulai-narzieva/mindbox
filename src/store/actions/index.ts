import { TodosActionsTypes } from '../../types/data'

export const addTodos = (text: string) => ({
  type: TodosActionsTypes.ADD_TODOS,
  payload: text,
})

export const toggleTodos = (id: number) => ({
  type: TodosActionsTypes.TOGGLE_TODOS,
  payload: id,
})

export const setFilter = (filter: string) => ({
  type: TodosActionsTypes.SET_FILTER,
  payload: { filter },
})

export const clearCompleteTodos = () => ({
  type: TodosActionsTypes.CLEAR_COMPLETED_TODOS,
})

export const actionFilters = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
}
