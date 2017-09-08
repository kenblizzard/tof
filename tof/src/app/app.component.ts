import { Component } from '@angular/core';
import { UserLoginComponent } from './user-login/user-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private userLoginComponent : UserLoginComponent) {
  }
  
  openLogin () {
	  this.userLoginComponent.open();
  }
}
