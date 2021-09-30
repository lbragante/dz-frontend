import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { OrderComponent } from './components/order/order.component';
import { BalanceStatementComponent } from './components/balance-statement/balance-statement.component';
import { AddressComponent } from './components/address/address.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsComponent,
    OrderComponent,
    BalanceStatementComponent,
    AddressComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
