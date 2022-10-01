import { LEVELS } from "../../models/levels.enum"
import { Task } from "../../models/task.model"
import TaskComponent from "../pure/task.component"

const TaskListComponent = () => {

  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

  return (
    <div>
      <div>Your Tasks:</div>
      <TaskComponent task={defaultTask} />
    </div>
  )

}

export default TaskListComponent