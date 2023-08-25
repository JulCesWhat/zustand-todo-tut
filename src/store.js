import { create } from "zustand";

const store = (set) => {
  return {
    tasks: [{ title: "TestTask", state: "ONGOING" }],
    addTask: (title, state) =>
      set((store) => ({ tasks: [...store.tasks, { title, state }] })),
    deleteTask: (title) => set((store) => ({
      tasks: store.tasks.filter((t) => t.title !== title)
    })),
  };
};

export const useStore = create(store);
