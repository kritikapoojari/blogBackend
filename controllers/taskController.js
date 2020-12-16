const fs = require("fs");
const path = require("path");
const Task = require("../models/Task");
const uniqid = require("uniqid");
const fileName = path.join(__dirname, "..", "data", "users.json");
const blogData = JSON.parse(fs.readFileSync(fileName, "utf-8"));

const getAllBlogs = (req, res) => {
    let data = blogData.filter((data) => {
        return Object.keys(req.query).every((property) => {
            return user[property] == req.query[property];
        });
    });
    res.status(200).json({
        message: "Sucessful",
        data: data,
    });
};

const getBlogsById = (req, res) => {
    let data = blogData.find((data) => {
        return data.id === req.params.id;
    });
    if (data) {
        res.status(200).json({
            status: "Sucessful",
            data: data,
        });
    } else {
        res.status(404).json({
            status: "User not found",
        });
    }
};

module.exports.getAllBlogs = getAllBlogs;
module.exports.getBlogsById = getBlogsById;