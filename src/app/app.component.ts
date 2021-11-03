import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appVersion: string;
  title = 'cycling-management-system-client';
  supportLanguage = ['en', 'pl']

  constructor(private translateService: TranslateService){
    this.translateService.addLangs(this.supportLanguage);
    this.translateService.setDefaultLang('pl');
    this.appVersion = environment.VERSION;
  }

  switchToLang(lang: string): void{
    this.translateService.use(lang);
  }

}