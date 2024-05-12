import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './components/bank/bank.component';
import { ViewTransactionsComponent } from './components/view-transactions/view-transactions.component';

const routes: Routes = [
  {path: '', redirectTo: 'bank', pathMatch:"full"},
  {path: 'bank', component: BankComponent, children: [
  ]},
  {path: 'view-transactions', component: ViewTransactionsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
