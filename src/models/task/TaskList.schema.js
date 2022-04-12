import mongoose from "mongoose";

const TaskListSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    default: "",
    minlength: 3,
    maxlength: 30,
  },
  hr: {
    type: Number,
    required: true,
  },
});

const TaskList = mongoose.model("Task", TaskListSchema); //Task converted to lowercase and plural
export default TaskList;
