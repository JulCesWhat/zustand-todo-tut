import { create } from "zustand";

const store = (set) => {
  return {
    tasks: [{ title: "TestTask", state: "ONGOING" }],
    draggedTask: null,
    addTask: (title, state) =>
      set((store) => ({ tasks: [...store.tasks, { title, state }] })),
    deleteTask: (title) =>
      set((store) => ({
        tasks: store.tasks.filter((t) => t.title !== title),
      })),
    setDraggedTask: (title) => set({ draggedTask: title }),
    moveTask: (title, state) =>
      set((store) => ({
        tasks: store.tasks.map((t) =>
          t.title === title ? { title, state } : t
        ),
      })),
  };
};

export const useStore = create(store);
