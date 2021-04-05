import { Component, OnInit } from "@angular/core";
import { ItemService } from "../item.service";
import { Item } from "../models/item";

@Component({
  selector: "app-item-display",
  templateUrl: "./item-display.component.html", 
  styleUrls: ["./item-display.component.css"]
})
export class ItemDisplayComponent implements OnInit {
  constructor(private itemService: ItemService) {}
  items: Item[] = [];
  searchQuery: any = "";
  cart: any = [];
 
  getItems() {
    this.itemService.getItems().subscribe(items => (this.items = items));
  }

  getProduceItems() {
    this.itemService.getProduceItems().subscribe(items => (this.items = items));
  }

  getDairyItems() {
    this.itemService.getDairyItems().subscribe(items => (this.items = items));
  }

  getSodaItems() {
    this.itemService.getSodaItems().subscribe(items => (this.items = items));
  }

  getProteinItems() {
    this.itemService.getProteinItems().subscribe(items => (this.items = items));
  }

  getQueryItems() {
    console.log("queryItems", this.searchQuery)
    this.itemService.getQueryItems(this.searchQuery).subscribe(items => (this.items = items));
  }

  handleChange(event) {
    console.log(event.target.value)
    return(this.searchQuery = event.target.value);
  }

  addToCart(itemId) {
    const itemQty = document.getElementById("item-" + itemId)
    console.log(itemQty)
      // @ts-ignore
      this.itemService.addToCart(itemId, itemQty.value).subscribe(cart => (this.cart = cart));
  }

  onSelectChange(e) {
    console.log(e.target.value);
  }

  getCartQuantity(cart) {
    var quantity = 0
    cart.forEach((item) => {
      quantity += item.qty
    })
    return quantity
  }
  
  ngOnInit() {
    this.getItems();
  }
}