import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CustomAttribute';
  active: boolean = true;
  display: boolean = false;
  DisplayNotice() {
    this.display = true;
  }
  occupation: string = 'teacher';
}
