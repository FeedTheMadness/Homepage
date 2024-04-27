import { Component } from '@angular/core';
import {AuthComponent} from "../auth/auth.component";
import {EditModeService} from "../service/edit-mode.service";
import {ButtonComponent} from "../button/button.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AuthComponent,
    ButtonComponent,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private editModeService: EditModeService) {
  }
  edit(): void {
    this.editModeService.toggle();
  }
}
