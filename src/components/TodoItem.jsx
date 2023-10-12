import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";
import { toggleComplete } from "../redux/tasksSlice";

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();

//   const handleCompleteClick = () => {
//     dispatch(toggleComplete({ id: id, completed: !completed }));
//   };

  const removeTask = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  return (
    <li className="task-item">
      <div>{title}</div>
      <div>
        {/* <input
          type="checkbox"
          checked={completed}
          onChange={handleCompleteClick}
        ></input> */}
        <button
          className="remove-task-button"
          onClick={() => {
            removeTask();
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
