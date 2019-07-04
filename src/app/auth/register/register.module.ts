import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];
    /**  RouterModule can be imported multiple times.we cannot have more than one router service active.
       That is why there are two ways to create the module: RouterModule.forRoot and RouterModule.forChild.
forRoot creates a module that contains all the directives, the given routes, and the router service itself.
forChild creates a module that contains all the directives and the given routes,
 but does not include the router service.
*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
