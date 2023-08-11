// Write your code here
import './index.css'

const TodoItem = props => {
  const {itemDetails} = props
  const {id, title, deleteTodo} = itemDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item-container">
      <p className="todo">{title}</p>
      <div className="btn">
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
