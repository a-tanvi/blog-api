const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");
const { uuid } = require('uuidv4');

const blogSchema = new Schema({

    title: {
        type: String,
        ref: "user",
        required: [true, "Must be provided"],
    },

    body: {
        type: String,
        required: [true, "Must be provided"],
        trim: true,
    },

    cDate: {
        type: String,
        default: moment().format("DD/MM/YYYY") + ";" + moment().format("hh:mm:ss"),
    },
    uDate: {
        type: String,
        default: moment().format("DD/MM/YYYY") + ";" + moment().format("hh:mm:ss"),
    },

    _id: { 
        type: String, 
        default: uuid
    }

})

const Blog = mongoose.model("blog", blogSchema);                   
module.exports = Blog;