import {SubCategoryService} from './SubCategory/sub-category.service';
import {CustomerService} from './customer/customer.service';
import {BrandService} from './brand/brand.service';
import {ProductService} from './products/product.service';
import {CategoryService} from './category/category.service';
import {FileSelectDirective} from 'ng2-file-upload/ng2-file-upload';
import {SubCategoryListComponent} from './SubCategory/subCategory-list/subCategory-list.component';
import {SubCategoryEditComponent} from './SubCategory/subCategory-edit/subCategory-edit.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {BrandListComponent} from './brand/brand-list/brand-list.component';
import {BrandEditComponent} from './brand/brand-edit/brand-edit.component';
import {FormsModule} from '@angular/forms';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layouts/header/header.component';
import {MainSidebarComponent} from './layouts/main-sidebar/main-sidebar.component';
import {MainContentComponent} from './layouts/main-content/main-content.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RoutingModule} from "./routing.module";
import {ProductDetailComponent} from "./products/product-detail/product-detail.component";
import {ProductListComponent} from "./products/product-list/product-list.component";
import {ProductEditComponent} from "./products/product-edit/product-edit.component";
import {LoginComponent} from "./login/login.component";
import {AuthService} from "./login/auth.service";
import {AuthGuard} from "./login/auth.guard";
import {AuthInterceptor} from "./login/auth.inteceptors";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSidebarComponent,
    MainContentComponent,
    FooterComponent,
    DashboardComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductEditComponent,
    CategoryEditComponent,
    CategoryListComponent,
    BrandEditComponent,
    BrandListComponent,
    CustomerEditComponent,
    CustomerListComponent,
    SubCategoryListComponent,
    SubCategoryEditComponent,
    FileSelectDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    CategoryService,
    ProductService,
    BrandService,
    AuthService,
    CustomerService,
    SubCategoryService,
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
