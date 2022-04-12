import express from "express";
import { insertTask, getTasks } from "../models/task/TaskList.model.js";
const router = express.Router();

// replace the faketasks with the real ones from database

//task api end points
router.get("/", async (req, res) => {
  const result = await getTasks();
  console.log(result);
  res.json({
    status: "success",
    message: "you made a get call",
  });
});

router.post("/", async (req, res) => {
  try {
    const result = await insertTask(req.body);
    console.log(result);

    res.json({
      status: "success",
      message: "Your new data has been added",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/", (req, res) => {
  res.json({
    message: "you made a delete call",
  });
});

export default router;
