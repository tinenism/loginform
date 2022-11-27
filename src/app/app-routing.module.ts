import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { CheckoutListComponent } from './checkout-list/checkout-list.component';
const routes: Routes = [
{
  path: '', component: DashboardComponent
},
{ 
  path: 'auth/signup', loadChildren: () => import('./auth/signup/signup.module').then(m => m.SignupModule) 
},
{
path: 'auth/login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
},
{
  path: 'about', component: AboutComponent
},
{
  path: 'menu', component: MenuComponent
},
{
<<<<<<< HEAD
  path: 'checkout-list', component: CheckoutListComponent
=======
  path: 'add-to-cart',component: AddToCartComponent
>>>>>>> 13640b9376fc389419c6ce27600277ecfd61ac0d
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
