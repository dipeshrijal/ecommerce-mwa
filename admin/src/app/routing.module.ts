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
  {
    path: 'products', component: ProductListComponent
  },
  {path: 'products/create', component: ProductEditComponent},
  {path: 'products/:id', component: ProductDetailComponent},
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
