import TaskListSchema from "./TaskList.schema.js";

//insert task
export const insertTask = (obj) => {
  return TaskListSchema(obj).save();
};
//read all task

//delete a task
