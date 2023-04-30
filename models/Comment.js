// Requirements
const { getDB } = require("../util/database");

module.exports = class Comment {
  constructor(username, content, rating, recipeId) {
    this.username = username;
    this.content = content;
    this.rating = rating;
    this.recipeId = recipeId;
  }

  async save() {
    return await getDB().collection("comments").insertOne(this);
  }
};
