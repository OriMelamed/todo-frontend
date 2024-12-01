import React, { useRef, useState } from 'react';

export default function AddNewTask({ addTask }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const taskRef = useRef('');

    const handleAddTask = () => {
        const taskValue = taskRef.current.value.trim();
        if (taskValue) {
            addTask(taskValue);
            taskRef.current.value = '';
            setIsDialogOpen(false);
        }
    };

    return (
        <div className="flex justify-center w-full pb-10 pt-6">
            <button
                className="border border-black p-2 rounded"
                onClick={() => setIsDialogOpen(true)}
            >
                Add New Task
            </button>

            {isDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-lg font-bold mb-4">Add New Task</h2>
                        <input
                            type="text"
                            ref={taskRef}
                            className="w-full border border-gray-300 rounded p-2 mb-4"
                            placeholder="Enter task"
                        />
                        <div className="flex justify-end space-x-4">
                            <button
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                onClick={() => setIsDialogOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                onClick={handleAddTask}
                            >
                                Add Task
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
