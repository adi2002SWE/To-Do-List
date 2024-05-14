import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../store/actions';
import './TaskList.css'; 

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDelete = taskId => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="TaskList">
      <ul>
        {tasks.map(task => (
          <li key={task.id} >
            {task.text}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
