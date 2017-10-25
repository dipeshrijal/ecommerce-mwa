import { SubCategoryListComponent } from './SubCategory/subCategory-list/subCategory-list.component';
import { SubCategoryEditComponent } from './SubCategory/subCategory-edit/subCategory-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { BrandEditComponent } from './brand/brand-edit/brand-edit.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductListComponent} from "./products/product-list/product-list.component";
import {ProductDetailComponent} from "./products/product-detail/product-detail.component";
import {ProductEditComponent} from "./products/product-edit/product-edit.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductListComponent },
  {path: 'products/create', component: ProductEditComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'categories', component: CategoryListComponent },
  {path: 'categories/create', component: CategoryEditComponent},
  {path: 'brands', component: BrandListComponent },
  {path: 'brands/create', component: BrandEditComponent},
  {path: 'users', component: CustomerListComponent },
  {path: 'subcategories', component: SubCategoryListComponent },
  {path: 'subcategories/create', component: SubCategoryEditComponent},
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
