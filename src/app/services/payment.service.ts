import { Injectable } from '@angular/core';
import { Wallet } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private upersons: Wallet[] = [
    {
      id: 1,
      name: 'Durgesh',
      amount: 'Pal',
      balance:'hhh',
      date:'12-10-2022',
      mode: 'card'
    },
    {
      id: 1,
      name: 'Durgesh',
      amount: 'Pal',
      balance:'hhh',
      date:'12-10-2022',
      mode: 'UPI'
    }
  ];

  constructor() { }

  getUsersFromData(): Wallet[] {
    return this.upersons;
  }

  addWallet(wallet: Wallet) {
    wallet.id = this.upersons.length + 1;
    this.upersons.push(wallet);

  }
  updateWallet(wallet: Wallet) {
    const index = this.upersons.findIndex(u => wallet.id === u.id);
    this.upersons[index] = wallet;
  }
  deleteUser(wallet: Wallet) {
    this.upersons.splice(this.upersons.indexOf(wallet), 1);
  }

  sortData(wallet:Wallet, sortBy: string){
  console.log(wallet,sortBy);
  }


}
