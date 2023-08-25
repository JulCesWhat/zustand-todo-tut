import { useState } from "react";
import { shallow } from "zustand/shallow";
import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";

export default function Column({ state }) {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const tasks = useStore(
    (store) => store.tasks.filter((t) => t.state === state),
    shallow
  );
  const addTask = useStore((store) => store.addTask);
  return (
    <div className="column">
      <div className="title-wrapper">
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {tasks.map((t) => (
        <Task key={t.title} title={t.title} />
      ))}
      {open && (
        <div className="modal">
          <div className="modal-content">
            <input onChange={(e) => setText(e.target.value)} value={text} />
            <button
              onClick={() => {
                addTask(text, state);
                setText("");
                setOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
