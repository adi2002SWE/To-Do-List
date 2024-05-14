import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions';
import './TaskInput.css';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addTask({ id: Date.now(), text: task }));
    setTask('');
  };

  return (
    <div className="TaskInput">
      <input type="text" value={task} onChange={handleChange}  placeholder='Add Your Task Here'/>
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default TaskInput;
