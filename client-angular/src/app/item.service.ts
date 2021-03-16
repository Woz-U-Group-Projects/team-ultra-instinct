import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Item } from "./models/item";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ItemService {

  // Express will use port 3000
  apiUrl: string = "http://localhost:3001/";

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl + "search");
  }

  getProduceItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl + "search/produce");
  }

  getDairyItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl + "search/dairy")
  }

  getSodaItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl + "search/soda")
  }

  getProteinItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl + "search/protein")
  }

  getQueryItems(searchQuery): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl + "search/searchQuery?queryString=" + searchQuery) 
  }

  addToCart(itemId, itemQty): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl + "search/addToCart?itemId="+itemId+"&itemQty=" + itemQty) 
  }

}