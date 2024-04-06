import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ItemComponent} from "../../item/item.component";
import {ItemsService} from "../../service/items.service";
import {ItemCategoryComponent} from "../../item-category/item-category.component";
import {FooterComponent} from "../../footer/footer.component";
import {HeaderComponent} from "../../header/header.component";
import {Category} from "../../config/items";

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterOutlet, ItemComponent, ItemCategoryComponent, FooterComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  list: Category[] = []

  constructor(private itemsService: ItemsService) {
    /*this.itemsService.list().subscribe(list => {
      this.list = list;
    })*/
    this.list = this.itemsService.list();
  }
}
