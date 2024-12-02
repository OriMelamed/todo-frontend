import { useEffect, useState } from 'react';
import AddNewTask from '../components/AddNewTask';
import Task from '../components/Task';
import useTaskStore from '../store/TaskStore';

export default function MainPage() {
    const tasks = useTaskStore((state) => state.tasks);
    const fetchTasks = useTaskStore((state) => state.fetchTasks);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks])
    useEffect(() => {
        tasks
    }, [tasks])

    return (
        <div className="w-full">
            <AddNewTask />
            <div className="flex justify-center space-x-4 my-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Show All Tasks
                </button>
                <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                >
                    Show Done Tasks
                </button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 p-4">
                {tasks.map((task) => (
                    <Task
                        key={task._id}
                        id={task._id}
                        status={task.status}
                        title={task.title}
                        description={task.description}
                        created_at={task.created_at}
                        updated_at={task.updated_at}
                    />
                ))}
            </div>
        </div>
    );
}
