const { Post } = require("../models");

const postData = [
  {
    title: "Post #1",
    post_content: "Post 1 by user1",
    user_id: 1,
  },
  {
    title: "Post #6",
    post_content: "Post 2 by user1",
    user_id: 1,
  },
  {
    title: "Post #2",
    post_content: "Post 1 by user2",
    user_id: 2,
  },
  {
    title: "Post #7",
    post_content: "Post 2 by user2",
    user_id: 2,
  },
  {
    title: "Post #3",
    post_content: "Post 3 by user3",
    user_id: 3,
  },
  {
    title: "Post #8",
    post_content: "Post 2 by user3",
    user_id: 3,
  },
  {
    title: "Post #4",
    post_content: "Post 1 by user4",
    user_id: 4,
  },
  {
    title: "Post #9",
    post_content: "Post 2 by user4",
    user_id: 4,
  },
  {
    title: "Post #5",
    post_content: "Post 1 by user5",
    user_id: 5,
  },
  {
    title: "Post #10",
    post_content: "Post 2 by user5",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
