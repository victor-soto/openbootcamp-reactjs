import PropTypes from 'prop-types'
import { TaskModel } from '../../models/task.model'

const Task = ({ task }) => {

  return (
    <div>
      <h2>{ task.name }</h2>
      <h3>{ task.description }</h3>
      <h4>{ task.level }</h4>
      <h5>{ task.completed ? 'COMPLETED' : 'PENDING' }</h5>
    </div>
  )

}

Task.propTypes = {
  task: PropTypes.instanceOf(TaskModel)
}

export default Task