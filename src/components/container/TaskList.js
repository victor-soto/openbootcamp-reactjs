import { LEVELS } from "../../models/levels.enum"
import { TaskModel } from "../../models/task.model"
import Task from "../pure/Task"

const TaskList = () => {

  const defaultTask = new TaskModel('Example', 'Default description', false, LEVELS.NORMAL)

  return (
    <div>
      <div>Your Tasks:</div>
      <Task task={defaultTask} />
    </div>
  )

}

export default TaskList