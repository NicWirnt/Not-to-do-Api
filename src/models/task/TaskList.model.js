import TaskListSchema from "./TaskList.schema.js";

//insert task
export const insertTask = (obj) => {
  return TaskListSchema(obj).save();
};

//read all task
export const getTasks = () => {
  return TaskListSchema.find();
};

//delete a task
