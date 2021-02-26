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
  
  ngOnInit() {
    this.getItems();
  }
}