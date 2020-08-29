import { Component } from '@angular/core';
import { ConfigService } from './config-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  config: any = {};
  fileLinks: any[] = [];
  constructor(private configService: ConfigService) { }

  async buttonclicked() {
    this.config = await this.configService.get();
    this.fileLinks = this.config.files;
  }
}
