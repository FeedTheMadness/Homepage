import { Component } from '@angular/core';
import {AuthComponent} from "../auth/auth.component";
import {EditModeService} from "../service/edit-mode.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AuthComponent
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
