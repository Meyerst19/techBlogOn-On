const { User } = require("../models");

const userData = [
  {
    username: "user1",
    email: "user1@email.com",
    password: `user1password`,
  },
  {
    username: "user2",
    email: "user2@email.com",
    password: `user2password`,
  },
  {
    username: "user3",
    email: "user3@email.com",
    password: `user3password`,
  },
  {
    username: "user4",
    email: "user4@email.com",
    password: `user4password`,
  },
  {
    username: "user5",
    email: "user5@email.com",
    password: `user5password`,
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
