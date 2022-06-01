const Blog = require('../models/blog')
const moment = require("moment");

const getAllBlogs = async (req, res) => {
  try {

    const blogs = await Blog.find({})
  res.status(200).json({ blogs })
    
  } catch (error) {
    res.status(500).json({ msg : error })
  }
  
}

const addBlog = async (req, res) => {
  
  try {
    const blogs = await Blog.create(req.body)
    res.status(201).json({ blogs })
  } catch (error) {
    res.status(500).json({ msg : error })
  }
  
}

const getBlogById = async (req, res) => {

  try {
    const { id: blogID } = req.params
  const blogs = await Blog.findOne({ _id: blogID })
  if (!blogs) {
     return res.status(404).json({ msg : `No product found with id : ${blogID}` })
  }

  res.status(200).json({ blogs })
  } catch (error) {
    res.status(500).json({ msg : error })
  }
  
}


const deleteBlogs = async (req, res) => {

  try {
    const { id: blogID } = req.params
  const blog = await Blog.findOneAndDelete({ _id: blogID })
  if (!blog) {
    return res.status(404).json({ msg : `No task found with id : ${blogID}` })
  }
  res.status(200).json({ blog })
  } catch (error) {
    res.status(500).json({ msg : error })
  }
  
}


const updateBlog = async (req, res) => {
  try {

    const { id: blogID } = req.params

   const blog = await Blog.findOne({ _id : blogID});
    
if (!blog) {
    return res.status(404).json({ msg : `No task found with id : ${blogID}` })
  }

  else {
  
    await blog.updateOne({
         title : req.body.title,
         body : req.body.body,
        uDate : moment().format("DD/MM/YYYY") + ";" + moment().format("hh:mm:ss")
       })

  res.status(200).json({ msg : `Succesfully Updated` })
  }
    
  } catch (error) {
    res.status(500).json({ msg : error })
  }
  
}

module.exports = { getAllBlogs, addBlog, getBlogById, deleteBlogs, updateBlog}