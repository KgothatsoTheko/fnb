import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent {

  constructor(private router: Router) {}

  goToTransactions() {
    this.router.navigate(['view-transactions'])
  }
}
