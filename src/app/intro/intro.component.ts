
import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  @Output() startClicked = new EventEmitter<void>();

  onStart() {
    this.startClicked.emit();
  }
}
