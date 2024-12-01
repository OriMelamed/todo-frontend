import { create } from 'zustand';

const useTaskStore = create((set) => ({
    tasks: [
        {
            id: 1,
            title: 'Task 1',
            status: 'pending',
            description: 'Task Description 1',
            created_at: '2024-11-29',
            updated_at: '2024-11-29',
        },
        {
            id: 2,
            title: 'Task 2',
            status: 'done',
            description: 'Task Description 2',
            created_at: '2024-11-29',
            updated_at: '2024-11-29',
        },
        {
            id: 3,
            title: 'Task 3',
            status: 'pending',
            description: 'Task Description 3',
            created_at: '2024-11-29',
            updated_at: '2024-11-29',
        },
    ],
    addTask: (task) => set((state) => ({
        tasks: [...state.tasks, task]
    })),
    deleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id)
    })),
    updateTask: (id, updatedTask) =>
        set((state) => ({
            tasks: state.tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)),
        })),
    markAsDone: (id) =>
        set((state) => ({
            tasks: state.tasks.map((task) => (task.id === id ? { ...task, status: 'done' } : task)),
        })),
    markAsPending: (id) =>
        set((state) => ({
            tasks: state.tasks.map((task) => (task.id === id ? { ...task, status: 'pending' } : task)),
        })),
}));

export default useTaskStore;
