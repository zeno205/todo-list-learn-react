import bin from "./bin.svg"
function TodoItem({id, title, date, completed, toggleTodo, deleteTodo}) {
    return (
        <li className="flex items-center w-full">
            <div className="flex items-center w-full">
                <input
                    type="checkbox"
                    value={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                    className="form-checkbox h-5 w-5 text-green-500 rounded-md mr-2 focus:ring-0" id={id} />
                <label htmlFor={id} className={`ml-3 flex items-center grow relative ${completed ? "strike-through-item" : ""}`}>
                    <div>
                        <p className="text-gray-800">{title}</p>
                        <p className="text-xs text-gray-500">{new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' }).replace(/ /g, ' ')}</p>
                    </div>
                </label>
            </div>
            <button
                onClick={() => deleteTodo(id)}
                className="ml-4">
                <img src={bin} width="25px" height="25px" />
            </button>
        </li>
    )
}

export default TodoItem