import { Component } from '@angular/core';
import { PwaService } from './pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amanda-chatbot';
  updateAvailable: boolean = false;
  constructor(
    public pwaService: PwaService) {

  }

  ngOnInit() {
    this.pwaService.getUpdateAvailable().subscribe(state => {
      this.updateAvailable = state;
    });
  }

  installApp() {
    if (this.pwaService.promptAvailable) {
      this.pwaService.promptAvailable.prompt();
    }
  }
}
