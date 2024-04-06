import {Component, Input} from '@angular/core';
import {Item} from "../config/items";
import {ItemComponent} from "../item/item.component";
import {ItemsService} from "../service/items.service";
import {EditModeService} from "../service/edit-mode.service";

@Component({
  selector: 'item-category',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './item-category.component.html',
  styleUrl: './item-category.component.scss'
})
export class ItemCategoryComponent {

  constructor(protected itemsService: ItemsService, private editModeService: EditModeService) {
  }

  @Input() categoryName: string = "category";
  @Input({alias: "items"}) itemsProp: Item[] = [];

  editMode(): boolean {
    return this.editModeService.editMode();
  }

  get items() {
    return this.editModeService.editMode()
      ? [...this.itemsProp, this.itemsService.itemAdd()]
      : this.itemsProp;
  }
}
