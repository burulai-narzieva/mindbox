import { visibilityFilter } from './visibilityFilter'
import { todosReducer } from './todosReducer'

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  todosReducer,
  visibilityFilter,
})

export type RootState = ReturnType<typeof rootReducer>
