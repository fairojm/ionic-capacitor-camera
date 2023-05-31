import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    App.addListener('backButton', ({canGoBack}) => {
      if(!canGoBack){
        App.exitApp();
      } else {
        window.history.back();
      }
    });
  }
}
