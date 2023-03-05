const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const argonautSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Argonaut = model("Argonaut", argonautSchema);

module.exports = Argonaut;