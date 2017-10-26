import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopBarComponent} from './layouts/top-bar/top-bar.component';
import {HeaderComponent} from './layouts/header/header.component';
import {SliderComponent} from './layouts/slider/slider.component';
import {MainComponent} from './layouts/main/main.component';
import {BrandsComponent} from './layouts/brands/brands.component';
import {StepsComponent} from './layouts/steps/steps.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {FastViewComponent} from './layouts/fast-view/fast-view.component';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductDetailsComponent} from './products/product-details/product-details.component';
import {RoutingModule} from "./routing-module";
import {WishListComponent} from './products/wish-list/wish-list.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {MyAccountComponent} from './user/my-account/my-account.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {UserService} from "./user/user.service";
import {ProductService} from "./products/product.service";
import {BrandService} from "./layouts/brands/brand.service";
import {NumbersPipe} from "./products/numbers.pipe";
import {AuthGuard} from "./user/auth.guard";
import {AuthService} from "./user/auth.service";
import {AuthInterceptor} from "./user/auth.inteceptors";


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HeaderComponent,
    SliderComponent,
    MainComponent,
    BrandsComponent,
    StepsComponent,
    FooterComponent,
    FastViewComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    WishListComponent,
    ShoppingCartComponent,
    NotFoundComponent,
    MyAccountComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    SearchResultComponent,
    NumbersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [
    UserService,
    ProductService,
    BrandService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
