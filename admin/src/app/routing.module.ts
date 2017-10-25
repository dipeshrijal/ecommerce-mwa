import {SubCategoryListComponent} from './SubCategory/subCategory-list/subCategory-list.component';
import {SubCategoryEditComponent} from './SubCategory/subCategory-edit/subCategory-edit.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {BrandEditComponent} from './brand/brand-edit/brand-edit.component';
import {BrandListComponent} from './brand/brand-list/brand-list.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductListComponent} from "./products/product-list/product-list.component";
import {ProductDetailComponent} from "./products/product-detail/product-detail.component";
import {ProductEditComponent} from "./products/product-edit/product-edit.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./login/auth.guard";


const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'products', component: ProductListComponent, canActivate: [AuthGuard]},
  {path: 'products/create', component: ProductEditComponent, canActivate: [AuthGuard]},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'categories', component: CategoryListComponent, canActivate: [AuthGuard]},
  {path: 'categories/create', component: CategoryEditComponent, canActivate: [AuthGuard]},
  {path: 'brands', component: BrandListComponent, canActivate: [AuthGuard]},
  {path: 'brands/create', component: BrandEditComponent, canActivate: [AuthGuard]},
  {path: 'users', component: CustomerListComponent, canActivate: [AuthGuard]},
  {path: 'subcategories', component: SubCategoryListComponent, canActivate: [AuthGuard]},
  {path: 'subcategories/create', component: SubCategoryEditComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {

}
