const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    genres: {
      type: String,
    },
    description: {
      type: String,
    },
    client: {
      type: String,
    },
    clientOther: {
      type: String,
    },
    location: {
      type: String,
    },
    city: {
      type: String,
    },
    lotArea: {
      type: Number,
    },
    conArea: {
      type: Number,
    },
    pool: {
      type: Number,
    },
    height: {
      type: Number,
    },
    number: {
      type: String,
    },
    style: {
      type: String,
    },
    thumbnail:{
      type:String,
    },
    images:[
      {
        src:{
          type:String,
        },
        width:{
          type:Number,
        },
        height:{
          type:Number,
        }
      }
    ],
    selectedImages:{
      type:Array
    },
    isSelected: {
     type: Boolean,
        default: false
    },
    cover:{
      type:String,
    },
    translations: {
      vi: {
        description: {
          type: String,
        },
        location: {
          type: String,
        },
        city: {
          type: String,
        },
        style: {
          type: String,
        },
        number:{
          type:String,
        }
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
