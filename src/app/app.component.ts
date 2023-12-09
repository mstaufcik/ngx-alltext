import { Component } from '@angular/core';
import { TextualService } from 'NgxAlltext';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alltext-angular';

  constructor(private textualService: TextualService) {
    this.textualService.loadFromUrl('/assets', 'en', {
      headers: {
        'Authorization': 'Bearer 123'
      }
    });

    this.textualService.loadedChanged$.subscribe((loaded) => {
        console.log('#loadedChanged', loaded);
    });
    this.textualService.loadError$.subscribe((err) => {
      console.log('#error', err);
    });
  }
  
}

