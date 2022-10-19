import PropTypes from 'prop-types'
import { LEVELS } from '../../models/levels.enum'
import { TaskModel } from '../../models/task.model'

const Task = ({ task, complete, remove }) => {

  function TaskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return(
          <h6 className='mb-0'>
            <span className='badge bg-primary'>
              {task.level}
            </span>
          </h6>)
        case LEVELS.URGENT:
          return(
            <h6 className='mb-0'>
              <span className='badge bg-warning'>
                {task.level}
              </span>
            </h6>)
        case LEVELS.BLOCKING:
          return(
            <h6 className='mb-0'>
              <span className='badge bg-danger'>
                {task.level}
              </span>
            </h6>)
        default:
          break;
    }
  }

  function TaskCompletedIcon() {
    if(task.completed){
      return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
    } else{
      return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
    }
  }

  const taskCompleted = {
    color: 'gray',
    fontWeight: 'bold',
    textDecoration: 'line-through'
  }

  const taskPending = {
    fontWeight: 'bold',
    color: 'tomato'
  }

  return (
    <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
      <th>
        <span className='ms-2'>{task.name}</span>
      </th>
      <td className='align-middle'>
        <span>{task.description}</span>
      </td>
      <td className='align-middle'>
        {TaskLevelBadge()}
      </td>
      <td className='align-middle'>
        {TaskCompletedIcon()}
        <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(task)}></i>
      </td>
    </tr>
  );

}

Task.propTypes = {
  task: PropTypes.instanceOf(TaskModel).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};


export default Task