import express from "express";
const router = express.Router();

// replace the faketasks with the real ones from database
const fakeTasks = [];

//task api end points
router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "you made a get call",
    tasks: fakeTasks,
  });
});

router.post("/", (req, res) => {
  fakeTasks.push(req.body);

  res.json({
    status: "success",
    message: "Your new data has been added",
  });
});

router.delete("/", (req, res) => {
  res.json({
    message: "you made a delete call",
  });
});

export default router;
