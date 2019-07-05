import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { User } from '../user';

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
    let user : User = new User();
    user.email = form.value["email"];
    user.password = form.value["password"]; 
    this.authService.login(user).subscribe((res)=>{
      this.router.navigateByUrl('home');
    });
  }

}
