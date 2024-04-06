import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'item',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  @Input({ required: true }) url: string = "";
  @Input({ required: true }) imageUrl: string = "";
}
