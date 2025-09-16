import React from "react";

const ProgressTracker = ({tasks}) => {

    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const completionRate = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return <div className="ProgressTracker">
    <p>
        {`Completed ${completedTasks} out of ${totalTasks} tasks Completed`}
    </p>

    <div className="progressContainer">
        <div className="progressBar" style={{width: `${completionRate}%`}}>
            
        </div>
    </div>
  </div>;
};

export default ProgressTracker;
