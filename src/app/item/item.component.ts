import {ChangeDetectorRef, Component, HostBinding, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgComponentOutlet, NgOptimizedImage, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgTemplateOutlet,
    NgComponentOutlet
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input({ required: true }) url: string = "";
  @Input({ required: true }) imageUrl: string = "";
  @Input({ required: false }) editing: boolean = true;

  edit(): void {
    this.editing = !this.editing;
  }

  editAnimationTiming(): string {
    return "timing" + Math.floor(Math.random() * 10);
  }
}
