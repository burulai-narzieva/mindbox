export interface ITodo {
  data: any[]
}

export interface ITodoItemProps {
  id: number
  todos: string
  complete: boolean
}

export interface FilterActionTypes {
  type: string
  payload: {
    filter: string
  }
}

export enum TodosActionsTypes {
  CLEAR_COMPLETED_TODOS = 'CLEAR_COMPLETED_TODOS',
  ADD_TODOS = 'ADD_TODOS',
  TOGGLE_TODOS = 'TOGGLE_TODOS',
  SET_FILTER = 'SET_FITLER',
}

export type ActionsCreatorsTypes =
  | AddTodos
  | ToggleTodos
  | SetFilter
  | ClearCompleteTodos

interface AddTodos {
  type: TodosActionsTypes.ADD_TODOS
  payload: string
}

interface ToggleTodos {
  type: TodosActionsTypes.TOGGLE_TODOS
  payload: number
}

interface SetFilter {
  type: TodosActionsTypes.SET_FILTER
  payload: any[]
}

interface ClearCompleteTodos {
  type: TodosActionsTypes.CLEAR_COMPLETED_TODOS
  payload: number
}
