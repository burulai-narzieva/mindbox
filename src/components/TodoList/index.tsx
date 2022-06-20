import { TextField } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos } from '../../store/actions'

export const TodoList: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const handleKeyDoown: React.KeyboardEventHandler<HTMLInputElement> = e => {
    // If the user pressed the Enter key:
    if (e.key === 'Enter' && inputValue !== '')
      return (
        e.preventDefault(),
        // Dispatch the "addTodos" action with this text
        dispatch(addTodos(inputValue)),
        // And clear out the text input
        setInputValue('')
      )
  }

  return (
    <div>
      <div>
        <TextField
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDoown}
          type="text"
          id="filled-basic"
          variant="filled"
          fullWidth
        />
      </div>
    </div>
  )
}
