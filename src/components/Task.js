import "./Task.css";
import classNames from "classnames";
import { useStore } from "../store";

export default function Task({ title }) {
  const task = useStore((store) => store.tasks.find((t) => t.title === title));
  return (
    <div className="task">
      <div>{task.title}</div>
      <div className="bottom-wrapper">
        <div></div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
}