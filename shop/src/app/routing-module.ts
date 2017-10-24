import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProductListComponent} from "./products/product-list/product-list.component";
import {ProductDetailsComponent} from "./products/product-details/product-details.component";
import {WishListComponent} from "./products/wish-list/wish-list.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {MyAccountComponent} from "./user/my-account/my-account.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {LoginComponent} from "./user/login/login.component";
import {RegisterComponent} from "./user/register/register.component";
import {SearchResultComponent} from "./search-result/search-result.component";

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'my-account', component: MyAccountComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'search', component: SearchResultComponent},
  {path: 'wishlist', component: WishListComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {

}
