// require("dotenv").config({ path: "../../.env" });
// const database = require("../../config/db.config");

const getUsers = (req, res) => {
  console.log("getUsers");
};

const getUsersById = (req, res) => {
  console.log("getUsersById");
};

const postUser = (req, res) => {
  console.log("postUser");
};

const updateUserById = (req, res) => {
  console.log("updateUserById");
};

const deleteUserById = (req, res) => {
  console.log("deleteUserById");
};

module.exports = {
  getUsers,
  getUsersById,
  postUser,
  updateUserById,
  deleteUserById,
};