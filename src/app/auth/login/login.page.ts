import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
 /**
 * LoginPage class used for login to user.
 */
export class LoginPage implements OnInit {

  constructor(private  authService:  AuthService, private  router:  Router) { }

  ngOnInit() {
  }
  /**
   *login(form) used for suscribe the login service and navigate to home page.
   * @param form 
   */
  login(form){
    this.authService.login(form.value).subscribe((res)=>{
      this.router.navigateByUrl('home');
    });
  }

}
