import "./Task.css";
import tash from "../assets/tash.svg";
import classNames from "classnames";

import { useStore } from "../store";

export default function Task({ title }) {
  const task = useStore((store) => store.tasks.find((t) => t.title === title));
  const deleteTask = useStore((store) => store.deleteTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  return (
    <div
      className="task"
      draggable
      onDragStart={() => setDraggedTask(task.title)}
    >
      <div>{task.title}</div>
      <div className="bottom-wrapper">
        <div>
          <img src={tash} alt="tash icon" onClick={() => deleteTask(task.title)} />
        </div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
}
