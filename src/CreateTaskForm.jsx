import { useState } from 'react'
function CreateTaskForm({ onSubmit }) {
    const [newItem, setNewItem] = useState({ title: "", date: new Date().toISOString().split('T')[0] })
    function handleSubmit(e) {
        e.preventDefault()
        if (newItem.title === "") return
        onSubmit(newItem.title, newItem.date)
        setNewItem({ title: "", date: new Date().toISOString().split('T')[0] })
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="mb-6 bg-white p-4 rounded-md shadow">
            <h3 className="text-lg font-medium mb-3">New task</h3>
            <div className="grid grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Enter task"
                    value={newItem.title}
                    onChange={e => setNewItem(
                        (currentValue) => { return { title: e.target.value, date: currentValue.date } }
                    )}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-green-300" />
                <input
                    type="date"
                    value={newItem.date}
                    onChange={e => setNewItem(
                        (currentValue) => { return { title: currentValue.title, date: e.target.value } }
                    )}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-green-300" />
            </div>
            <button
                type="submit"
                className="mt-4 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md">
                Add Task
            </button>
        </form>
    )
}

export default CreateTaskForm