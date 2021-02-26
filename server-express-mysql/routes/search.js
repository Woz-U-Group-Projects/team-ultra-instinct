var express = require("express");
var router = express.Router();
var models = require("../models");

const groceryItems = [
  {
    name: "apple",
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU",
  },
  {
    name: "orange",
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU",
  },
  {
    name: "banana",
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU",
  },
  {
    name: "apple",
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU",
  },
  {
    name: "orange",
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU",
  },
  {
    name: "banana",
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU",
  },
  {
    name: "apple",
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU",
  },
  {
    name: "orange",
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU",
  },
  {
    name: "banana",
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU",
  },
]

router.get("/", function(req, res, next) {
    // models.Items.findAll().then(items => res.json(items));
    res.send(groceryItems)
  });

router.get("/:item", function(req, res, next) {
    models.Items.findAllWhere({name:req.params.item}).then(items => res.json(items));
  });




























module.exports = router;