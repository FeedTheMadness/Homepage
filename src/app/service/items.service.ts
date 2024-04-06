import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import items, {Category, Item} from "../config/items";

@Injectable({providedIn: "root"})
export class ItemsService {

  constructor(private httpClient: HttpClient) {
  }
  /*
  list(): Observable<Category[]> {
    return this.httpClient.get<Category[]>("http://localhost:8080/api/v1/categories", {
      headers: {
        "HTTP": "clems"
      }
    });
  }*/
  list(): Category[] {
    return items;
  }

  itemAdd(): Item {
    return {
      "name": "Add item",
      "url": "https://ftmnet.com",
      "imageUrl": "../../assets/img/plus.svg"
    }
  }
}
