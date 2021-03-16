import { Component, OnInit } from "@angular/core";
import { ItemService } from "../item.service";
import { Item } from "../models/item";

@Component({
  selector: "app-item-display",
  templateUrl: "./item-display.component.html", 
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

  getQueryItems(event) {
    console.log("queryItems", this.searchQuery)
    this.itemService.getQueryItems(this.searchQuery).subscribe(items => (this.items = items));
  }

  handleChange(event) {
    console.log(event.target.value)
    return(this.searchQuery = event.target.value);
  }

  addToCart(itemId) {
    this.itemService.addToCart(itemId, 1).subscribe(cart => (this.cart = cart));
  }
  
  ngOnInit() {
    this.getItems();
  }
}