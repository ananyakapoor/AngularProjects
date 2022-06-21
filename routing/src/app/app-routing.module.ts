import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: "Product",component:ProductComponent},
  {path: "Inventory",component:InventoryComponent}
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  //exports: [RouterModule]
})
export class AppRoutingModule { }
