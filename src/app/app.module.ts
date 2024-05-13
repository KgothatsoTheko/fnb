import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankComponent } from './components/bank/bank.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ViewTransactionsComponent } from './components/view-transactions/view-transactions.component';
import { AirtimeComponent } from './transactions/airtime/airtime.component';
import { ElectricityComponent } from './transactions/electricity/electricity.component';

@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    ViewTransactionsComponent,
    AirtimeComponent,
    ElectricityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
