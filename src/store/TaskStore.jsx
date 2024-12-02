import { create } from 'zustand';

const useTaskStore = create((set, get) => ({
    tasks: [],
    loading: false,

    fetchTasks: async () => {
        set({ loading: true });
        try {
            const response = await fetch('http://localhost:3000/tasks');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            set({ tasks: data });
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
        } finally {
            set({ loading: false });
        }
    },
    addTask: (task) => set((state) => ({
        tasks: [...state.tasks, task],
    })),
    deleteTask: async (id) => {
        const response = await fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        await get().fetchTasks();
    },
    markAsDone: async (id) => {
        const response = await fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'done' }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        await get().fetchTasks();
    },
    markAsPending: async (id) => {
        const response = await fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'pending' }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        await get().fetchTasks();
    },
}));

export default useTaskStore;
