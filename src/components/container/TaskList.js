import React, { useState, useEffect } from 'react'

import { LEVELS } from '../../models/levels.enum'
import { TaskModel } from '../../models/task.model'

import Task from '../pure/Task';
import '../../styles/task.css';
import TaskForm from '../pure/forms/TaskForm';

const TaskList = () => {

    const [tasks, setTasks] = useState([
      new TaskModel('Example1', 'Description1', true, LEVELS.NORMAL),
      new TaskModel('Example2', 'Description 2', false, LEVELS.URGENT),
      new TaskModel('Example3', 'Description 3', false, LEVELS.BLOCKING)
    ]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task State has been modified');
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [tasks])

    function completeTask(task){
      const index = tasks.indexOf(task);
      const tempTasks = [...tasks];
      tempTasks[index].completed = !tempTasks[index].completed;
      setTasks(tempTasks);
    }

    function deleteTask(task){
      const index = tasks.indexOf(task);
      const tempTasks = [...tasks];
      tempTasks.splice(index,1);
      setTasks(tempTasks);
    }

    function addTask(task) {
      console.log(task)
      const tempTasks = [...tasks];
      tempTasks.push(task);
      setTasks(tempTasks);
    }

    const Table = () => {
      return (
        <table>
          <thead>
            <tr>
              <th scope='col'>Title</th>
              <th scope='col'>Description</th>
              <th scope='col'>Priority</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <Task
                key={index}
                task={task}
                complete={completeTask}
                remove={deleteTask} />
            ))}
          </tbody>
        </table>
      );
    }

    let tasksTable;

    if(tasks.length > 0){
        tasksTable = <Table />
    } else {
        tasksTable = (
        <div>
            <h3> There are no tasks to show</h3>
            <h4>Please, create one</h4>
        </div>
        )
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div className='pt-3'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-header p-3'>
                <h5>Your Tasks:</h5>
              </div>
              <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                {loading ? (<p style={loadingStyle}>Loading tasks...</p>) : tasksTable}
              </div>
            </div>
          </div>
          <TaskForm add={addTask} length={tasks.length} />
        </div>
    );
};

export default TaskList
