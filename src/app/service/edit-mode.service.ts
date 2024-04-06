import {Injectable, signal} from "@angular/core";

@Injectable({providedIn: "root"})
export class EditModeService {

  editMode = signal(false);

  toggle(): boolean {
    this.editMode.set(!this.editMode());
    return this.editMode();
  }
}
