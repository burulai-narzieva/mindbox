import { clearCompleteTodos, setFilter, actionFilters } from '../../store/actions'
import { Grid, List, ListItem, ListItemText } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks'
import { Checkbox } from 'antd'
import { TodoItem } from '../TodoItem'

export const Filter: React.FC = () => {
  const currentFilter = useTypedSelector(state => state.visibilityFilter)
  const todosState = useTypedSelector(state => state.todosReducer.data)
  const dispatch = useDispatch()

  const filterFunction = () => {
    switch (currentFilter) {
      case actionFilters.ALL:
        return todosState
      case actionFilters.ACTIVE:
        return todosState.filter(el => el.complete === false)
      case actionFilters.COMPLETED:
        return todosState.filter(el => el.complete === true)
      default:
        return todosState
    }
  }

  return (
    <div>
      <div>
        {todosState.length ? (
          filterFunction().map((el, id) => {
            return (
              <TodoItem
                todos={el.text}
                id={el.id}
                complete={el.complete}
                key={id}
              />
            )
          })
        ) : (
          <ListItem>
            <ListItemText style={{ marginLeft: '10px' }}>
              No Todos Yay!
            </ListItemText>
          </ListItem>
        )}
      </div>

      <Grid>
        <List style={{ padding: '13px 8px' }}>
          <Checkbox
            style={{ marginLeft: '10px', cursor: 'pointer' }}
            checked={currentFilter === actionFilters.ALL}
            onChange={() => {
              dispatch(setFilter(actionFilters.ALL))
            }}
          >
            All
          </Checkbox>

          <Checkbox
            style={{ marginLeft: '10px', cursor: 'pointer' }}
            checked={currentFilter === actionFilters.ACTIVE}
            onChange={() => {
              dispatch(setFilter(actionFilters.ACTIVE))
            }}
          >
            Active
          </Checkbox>

          <Checkbox
            style={{ marginLeft: '10px', cursor: 'pointer' }}
            checked={currentFilter === actionFilters.COMPLETED}
            onChange={() => {
              dispatch(setFilter(actionFilters.COMPLETED))
            }}
          >
            Completed
          </Checkbox>

          <div
            style={{
              cursor: 'pointer',
              display: 'inline-block',
              marginLeft: 190,
            }}
            onClick={() => dispatch(clearCompleteTodos())}
          >
            Clear completed
          </div>
        </List>
      </Grid>
    </div>
  )
}
