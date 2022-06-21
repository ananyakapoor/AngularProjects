import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RouterModule,Routes } from '@angular/router';

const appRoutes = [
  {path: 'Product', component:ProductComponent},
  {path: 'Inventory', component:InventoryComponent},
  {path: '', component:InventoryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
