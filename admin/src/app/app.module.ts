import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
