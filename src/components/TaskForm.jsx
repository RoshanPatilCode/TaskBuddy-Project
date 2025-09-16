import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Personal");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ text: task, priority, category, completed: false });
    //Reset form fields after submission
    setTask("");
    setPriority("Medium");
    setCategory("Personal");
  };
  return (
    <form onSubmit={handleSubmit} className="taskForm">
      <div id="inputBox">
        <input
          type="text"
          value={task}
          placeholder="Enter Your Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <span>
          <button type="submit">Add Task</button>
        </span>
      </div>

      <div id="btns">
        <select
          name="priority"
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="personal">Personal</option>
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="shopping">Shopping</option>
        </select>
      </div>
    </form>
  );
};

export default TaskForm;
