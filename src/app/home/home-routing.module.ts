import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './components/address/address.component';
import { BalanceStatementComponent } from './components/balance-statement/balance-statement.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',  redirectTo: 'saldo-extrato' },
  { path: 'saldo-extrato', component: BalanceStatementComponent },
  { path: 'produtos', component: ProductsComponent },
  { path: 'pedidos', component: OrderComponent },
  { path: 'endereco-entrega', component: AddressComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
