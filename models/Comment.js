// Requirements
const Recipe = require("./Recipe");
const { getDB } = require("../util/database");
const { ObjectId } = require("bson");

module.exports = class Comment {
  constructor(username, content, rating, recipeId) {
    this.username = username;
    this.content = content;
    this.rating = rating;
    this.recipeId = new ObjectId(recipeId);
  }

  async save() {
    return await getDB().collection("comments").insertOne(this);
  }

  static async fetchAll(id) {
    return await getDB()
      .collection("comments")
      .find({ recipeId: new ObjectId(id) })
      .toArray();
  }
};
