import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => {
  return {
    tasks: [],
    draggedTask: null,
    addTask: (title, state) =>
      set(
        (store) => ({ tasks: [...store.tasks, { title, state }] }),
        false,
        "addTask"
      ),
    deleteTask: (title) =>
      set(
        (store) => ({
          tasks: store.tasks.filter((t) => t.title !== title),
        }),
        false,
        "deleteTask"
      ),
    setDraggedTask: (title) =>
      set({ draggedTask: title }, false, "setDraggedTask"),
    moveTask: (title, state) =>
      set(
        (store) => ({
          tasks: store.tasks.map((t) =>
            t.title === title ? { title, state } : t
          ),
        }),
        false,
        "moveTask"
      ),
  };
};

export const useStore = create(persist(devtools(store), { name: "store" }));
