import { Component, OnInit } from '@angular/core';
import { Wallet } from './models/payment';
import { UserService } from './services/payment.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  payments!: Wallet[];
  paymentForm: boolean = false;
  isNewWallet: boolean = false;
  newWallet: any = {};
  editPaymentForm!: boolean;
  editedWallet: any = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.payments = this.getUsers();
  }

  getUsers(): Wallet[] {
    return this.userService.getUsersFromData();
  }

  showEditUserForm(wallet: Wallet) {
    if (!wallet) {
      this.paymentForm = false;
      return;
    }
    this.editPaymentForm = true;
    this.editedWallet = wallet;
  }

  showAddWalletForm() {
    // resets form if edited wallet
    if (this.payments.length) {
      this.newWallet = {};
    }
    this.paymentForm = true;
    this.isNewWallet = true;

  }

  saveWallet(wallet: Wallet) {
    if (this.isNewWallet) {
      // add a new wallet
      this.userService.addWallet(wallet);
    }
    this.paymentForm = false;
  }

  updateWallet() {
    this.userService.updateWallet(this.editedWallet);
    this.editPaymentForm = false;
    this.editedWallet = {};
  }

  removeWallet(wallet: Wallet) {
    this.userService.deleteUser(wallet);
  }

  cancelEdits() {
    this.editedWallet = {};
    this.editPaymentForm = false;
  }

  cancelNewWallet() {
    this.newWallet = {};
    this.paymentForm = false;
  }

}
