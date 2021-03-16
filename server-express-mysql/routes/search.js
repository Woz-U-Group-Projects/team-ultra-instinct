var express = require("express");
var router = express.Router();
var models = require("../models");

const groceryItems = [
  {
    name: "Apple",
    id: 1,
    category: "produce",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB34NO57glHFl9PL_sF8VAgJ9HwE7RDjd-YQ&usqp=CAU",
  },
  {
    name: "Orange",
    id: 2,
    category: "produce",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtj8VrC1A-XHR7t9-qWxBLfTVk6VQ2XvAeA&usqp=CAU",
  },
  {
    name: "Banana",
    id: 3,
    category: "produce",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
  },
  {
    name: "Lettuce",
    id: 4,
    category: "produce",
    image: "https://cdn2.stylecraze.com/wp-content/uploads/2013/07/16-Best-Benefits-Of-Lettuce-For-Skin-Hair-And-Health.jpg",
  },
  {
    name: "Tomato",
    id: 5,
    category: "produce",
    image: "https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38=",
  },
  {
    name: "Onion",
    id: 6,
    category: "produce",
    image: "https://www.markon.com/sites/default/files/styles/large/public/pi_photos/Onions_Yellow_Hero.jpg",
  },
  {
    name: "Milk",
    id: 7,
    category: "dairy",
    image: "https://img.thrfun.com/img/015/737/milk_jug_m3.jpg",
  },
  {
    name: "Cheese",
    id: 8,
    category: "dairy",
    image: "https://images-na.ssl-images-amazon.com/images/I/51-wrRpnRBL.jpg",
  },
  {
    name: "Yogurt",
    id: 9,
    category: "dairy",
    image: "https://www.stonyfield.com/wp-content/uploads/2017/02/stonyfield-greek-organic-yogurt-30oz-whole-milk-plain-straight-500x500.png",
  },
  {
    name: "Ice Cream",
    id: 10,
    category: "dairy",
    image: "https://cdn11.bigcommerce.com/s-p4v5wfxev4/images/stencil/1280x1280/products/236/628/ETFZ-0000-0970__33413.1523654876.png?c=2?imbypass=on",
  },
  {
    name: "Butter",
    id: 11,
    category: "dairy",
    image: "https://flavorpourfection.com/wp-content/uploads/2014/12/butter.jpeg",
  },
  {
    name: "Eggs",
    id: 12,
    category: "dairy",
    image: "https://products.blains.com/600/77/771689.jpg",
  },
  { 
    name: "Pepsi",
    id: 13,
    category: "soda",
    image: "https://images.heb.com/is/image/HEBGrocery/000026101",
  },
  {
    name: "Coca-Cola",
    id: 14,
    category: "soda",
    image: "https://images.heb.com/is/image/HEBGrocery/001397056",
  },
  {
    name: "Mountain Dew",
    id: 15,
    category: "soda",
    image: "https://www.kroger.com/product/images/large/left/0001200000233",
  },
  {
    name: "Fanta",
    id: 16,
    category: "soda",
    image: "https://images.heb.com/is/image/HEBGrocery/001397069",
  },
  {
    name: "Pork",
    id: 17,
    category: "protein",
    image: "https://st2.depositphotos.com/3046849/5506/i/950/depositphotos_55061193-stock-photo-packaged-bone-in-pork-chops.jpg",
  },
  {
    name: "Beef",
    id: 18,
    category: "protein",
    image: "https://www.cargillgroundbeef.com/images/OC93_7TrayHeromockup.jpg",
  },
  {
    name: "Fish",
    id: 19,
    category: "protein",
    image: "https://www.harpak-ulma.com/wp-content/uploads/2019/08/Flow-fish-in-tray-PATROSZONY.jpg",
  },
  {
    name: "Chicken",
    id: 20,
    category: "protein",
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2018%2F06%2Fmain%2Fchicken-labels.jpg%3Fitok%3Dk3ro_cKu%261529345658",
  },
  {
    name: "Sausage",
    id: 21,
    category: "protein",
    image: "https://www.meijer.com/content/dam/meijer/product/0070/88/2068/69/0070882068698_1_A1C1_1200.png",
  },
]

const GroceryCart = [
]

router.get("/addToCart", function(req, res, next) {
  // models.Items.findAll().then(items => res.json(items));
  if (GroceryCart.some(item => item.id === req.query.itemId)){
    const itemIndex = GroceryCart.findIndex(item => item.id === req.query.itemId)
    GroceryCart[itemIndex].qty += parseInt(req.query.itemQty)
  } else {
    GroceryCart.push({ id: req.query.itemId, 
      qty: parseInt(req.query.itemQty)})
  }
  res.send(GroceryCart)
});

router.get("/", function(req, res, next) {
    // models.Items.findAll().then(items => res.json(items));
    res.send(groceryItems)
  });

router.get("/produce", function(req, res, next) {
    // models.Items.findAll().then(items => res.json(items));
    let produceItems = groceryItems.filter(groceryItem => groceryItem.category === "produce");
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

router.get("/protein", function(req, res, next) {
    // models.Items.findAll().then(items => res.json(items));
    let proteinItems = groceryItems.filter(groceryItem => groceryItem.category === "protein");
    res.send(proteinItems)
  });

router.get("/searchQuery", function(req, res, next) {
  let items = groceryItems.filter(groceryItem => groceryItem.name.toLowerCase() === req.query.queryString.toLowerCase());
  res.send(items)
});

module.exports = router;