// Requirements
const Recipe = require("../models/Recipe");
const Comment = require("../models/Comment");

exports.postComment = async (request, response) => {
  const { username, content, rating } = request.body;
  const { id } = request.params;
  const comment = new Comment(username, content, rating, id);

  if (comment.username.length === 0 || comment.content.length === 0) {
    const error = {
      title: "Error 404",
      message: "Bad request! Comment form not filled in properly!",
    };
    return response.render("error", {
      pageTitle: error.title,
      path: "*",
      error,
    });
  } else {
    await comment.save();
    return response.redirect("/");
  }
};
