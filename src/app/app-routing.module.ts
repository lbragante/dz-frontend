import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';

const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule', canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'home/saldo-extrato' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
