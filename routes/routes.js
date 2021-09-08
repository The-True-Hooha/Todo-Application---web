const router = require("express").Router();
const { application } = require("express");
const Todo = require("../models/Todo");


router.get("/", function (req, res) {
    res.render("index", {});
});

router.post("/Todo", function(req, res) {
    let newTodo = new Todo({ description: req.body.description });
});

module.exports = router;