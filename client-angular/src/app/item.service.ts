import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Item } from "./models/item";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ItemService {

  // Express will use port 3000
  apiUrl: string = "http://localhost:3001/search";

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

}