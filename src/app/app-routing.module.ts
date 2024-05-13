import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './components/bank/bank.component';
import { ViewTransactionsComponent } from './components/view-transactions/view-transactions.component';
import { AirtimeComponent } from './transactions/airtime/airtime.component';
import { ElectricityComponent } from './transactions/electricity/electricity.component';

const routes: Routes = [
  {path: '', redirectTo: 'bank', pathMatch:"full"},
  {path: 'bank', component: BankComponent, children: []},
  {path: 'view-transactions', component: ViewTransactionsComponent},
  {path: 'airtime', component: AirtimeComponent},
  {path: 'electricity', component: ElectricityComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
