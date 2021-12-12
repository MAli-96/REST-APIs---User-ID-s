import express from "express";
import users from "./data/users.js";
import {
  getUserByID,
  getUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "./models/users.js";

const PORT = 3000;
const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get("/users" , function(req, res) {
  let userArray = getUsers(users)
  res.json({
    success: true, 
    payload: userArray })
});

app.get("/users/:id", function(req, res) {
  let id = Number(req.params.id);
  let user = (getUserByID(id));
  res.json({
    success: true,
    payload: user,
  });
});

app.post("/users/:id", function(req, res) {
  let newUser = req.body;
  let user = createUser(newUser);
  res.json({
    success: true,
    payload: user,
  });
});

app.put("/users/:id", function(req, res) {
  const id = Number(req.params.id);
  const data = req.body;
  const user = updateUserByID(id, data);
  res.json({
    success: true,
    payload: user,
  })
  });

  app.delete("/users/:id", function (req, res){
    const id = Number(req.params.id);
    const user = deleteUserByID(id);
    res.json({
      success: true,
      payload: user,
    })
  });