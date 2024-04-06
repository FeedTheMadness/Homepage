import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  date = new Date();

  async copy(): Promise<void> {
    await navigator.clipboard.writeText("contact@ftmnet.com")
  }
}
