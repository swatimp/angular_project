import { Component, OnInit } from '@angular/core';
import { Wallet } from '../models/payment';
import { UserService } from '../services/payment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  wallets!: Wallet[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.wallets = this.getUsers();
  }
  getUsers(): Wallet[] {
    return this.userService.getUsersFromData();
  }
  sortByData(wallet: Wallet, sortBy: string) {
      this.userService.sortData(wallet,sortBy);
  }

}
