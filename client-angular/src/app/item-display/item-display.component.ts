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
  
  ngOnInit() {
    this.getItems();
  }
}