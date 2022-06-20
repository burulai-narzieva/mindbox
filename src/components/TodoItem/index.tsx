import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodos } from '../../store/actions'
import { ITodoItemProps } from '../../types/data'
import { Divider, Grid, List, ListItem, ListItemText } from '@material-ui/core'
import { Checkbox } from 'antd'

export const TodoItem: React.FC<ITodoItemProps> = props => {
  const dispatch = useDispatch()
  const { todos, complete, id } = props

  return (
    <div>
      <Grid>
        <List>
          <ListItem>
            <Checkbox
              checked={complete}
              onChange={() => dispatch(toggleTodos(id))}
            />
            <ListItemText style={{marginLeft: '10px'}}>{todos}</ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Grid>
    </div>
  )
}
