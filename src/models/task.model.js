import { LEVELS } from "./levels.enum"

export class TaskModel {
  name = ''
  description = ''
  completed = false
  level = LEVELS.NORMAL

  constructor(name, description, completed, levels) {
    this.name = name
    this.description = description
    this.completed = completed
    this.levels = levels
  }
}