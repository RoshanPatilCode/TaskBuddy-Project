import React from "react";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const toggleComplete = (index) => {
    const updatedTasks = {
      ...tasks[index],
      completed: !tasks[index].completed,
    };
    updateTask(updatedTasks, index);
  };
  return (
    <ul className="taskList">
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : ""}>
          <div>
            <span>{task.text}</span>
            <small>
              ({task.priority}, {task.category})
            </small>
          </div>

          <div>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? "Undo" : "Complete"}{" "}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
