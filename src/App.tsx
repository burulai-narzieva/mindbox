import { Card, Container } from '@material-ui/core'
import { Filter } from './components/Filter'
import { TodoList } from './components/TodoList'
import './App.css'

function App() {
  return (
    <Container maxWidth="sm">
      <h1>Todo app - Mindbox</h1>
      <Card>
        <TodoList />
        <Filter />
      </Card>
    </Container>
  )
}

export default App
