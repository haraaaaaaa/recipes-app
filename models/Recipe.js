// Requirements
const { getDB } = require("../util/database");
const { ObjectId } = require("bson");

module.exports = class Recipe {
  constructor(title, instructions, ingredients, imgUrl, categoryId, recipeId) {
    this.title = title;
    this.instructions = instructions;
    this.ingredients = ingredients;
    this.imgUrl = imgUrl;
    this.categoryId = new ObjectId(categoryId);

    if (recipeId) {
      this.recipeId = new ObjectId(recipeId);
    }
  }

  async save() {
    if (!this.recipeId) {
      return await getDB().collection("recipes").insertOne(this);
    } else {
      return await getDB()
        .collection("recipes")
        .updateOne(
          { _id: this.recipeId },
          {
            $set: {
              title: this.title,
              instruction: this.instruction,
              categoryId: this.categoryId,
            },
          }
        );
    }
  }

  static async fetchAll() {
    return await getDB().collection("recipes").find().toArray();
  }

  static async findById(id) {
    return await getDB()
      .collection("recipes")
      .findOne({ _id: new ObjectId(id) });
  }
};
