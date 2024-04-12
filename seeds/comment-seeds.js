const { Comment } = require("../models");

const commentData = [
  {
    comment_content: "Comment 1",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_content: "Comment 2",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_content: "Comment 3",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_content: "Comment 4",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_content: "Comment 5",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_content: "Comment 6",
    user_id: 4,
    post_id: 2,
  },
  {
    comment_content: "Comment 7",
    user_id: 5,
    post_id: 3,
  },
  {
    comment_content: "Comment 8",
    user_id: 1,
    post_id: 4,
  },
  {
    comment_content: "Comment 9",
    user_id: 1,
    post_id: 5,
  },
  {
    comment_content: "Comment 10",
    user_id: 2,
    post_id: 6,
  },
  {
    comment_content: "Comment 11",
    user_id: 3,
    post_id: 7,
  },
  {
    comment_content: "Comment 12",
    user_id: 4,
    post_id: 9,
  },
  {
    comment_content: "Comment 13",
    user_id: 1,
    post_id: 10,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
