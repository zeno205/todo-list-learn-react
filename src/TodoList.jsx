import TodoItem from "./TodoItem"
function TodoList({ todoList, toggleTodo, deleteTodo }) {
    return (
        <div className="bg-white p-4 rounded-md shadow shrink overflow-y-scroll">
            <ul className="space-y-3">
                {todoList.map((todo) =>
                    <TodoItem {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id}/>
                )}
            </ul>
        </div>
    )
}

export default TodoList