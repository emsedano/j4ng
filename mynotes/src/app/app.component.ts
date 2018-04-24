// The imports
import { Component } from '@angular/core';
// The decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// The actual component definition (where our magic resides)
export class AppComponent {
  title = 'app coming from parent';
  clickMe($event: any): void {
    alert('hi there events');
    console.log($event);
  }

  handleUpdateAppTitle(event: any): void {
    console.log('received on parent');
    this.title = event;
  }

}
