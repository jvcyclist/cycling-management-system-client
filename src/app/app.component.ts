import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cycling-management-system-client';
  supportLanguage = ['en', 'pl']

  constructor(private translateService: TranslateService){
    this.translateService.addLangs(this.supportLanguage);
    this.translateService.setDefaultLang('pl');
    // const browslang = this.translateService.getBrowserLang();
    // this.translateService.use(browslang);
  }

  switchToLang(lang: string): void{
    this.translateService.use(lang);
  }

}