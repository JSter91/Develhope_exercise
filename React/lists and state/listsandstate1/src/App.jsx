import './App.css'
import { TodoList } from './TodoList'

function App() {
  const list = ["marco", "Andrea", "Luca", "Gianni"]

  return (
    <>
    <TodoList list={list}></TodoList>
    </>
  )
}

export default App
