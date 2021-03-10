var express = require("express");
var router = express.Router();
var models = require("../models");

const groceryItems = [
  {
    name: "apple",
    id: 1,
    category: "produce",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU",
  },
  {
    name: "orange",
    id: 2,
    category: "produce",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU",
  },
  {
    name: "banana",
    id: 3,
    category: "produce",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU",
  },
  {
    name: "milk",
    id: 4,
    category: "dairy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU",
  },
  {
    name: "cheese",
    id: 5,
    category: "dairy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU",
  },
  {
    name: "pepsi",
    id: 6,
    category: "soda",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU",
  },
  {
    name: "coke",
    id: 7,
    category: "soda",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU",
  },
]

router.get("/", function(req, res, next) {
    // models.Items.findAll().then(items => res.json(items));
    res.send(groceryItems)
  });

router.get("/produce", function(req, res, next) {
    // models.Items.findAll().then(items => res.json(items));
    res.send(produceItems)
  });

router.get("/dairy", function(req, res, next) {
    // models.Items.findAll().then(items => res.json(items));
    let dairyItems = groceryItems.filter(groceryItem => groceryItem.category === "dairy");
    res.send(dairyItems)
  });

  router.get("/soda", function(req, res, next) {
    // models.Items.findAll().then(items => res.json(items));
    let sodaItems = groceryItems.filter(groceryItem => groceryItem.category === "soda");
    res.send(sodaItems)
  });

router.get("/:item", function(req, res, next) {
    models.Items.findAllWhere({name:req.params.item}).then(items => res.json(items));
  });

module.exports = router;