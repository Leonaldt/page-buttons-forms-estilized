import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomSnackBar } from '../custom-snackbar/custom-snackbar.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [`
  button {
    margin-right: 8px;
  }
  `]
})
export class HomePageComponent {
  snackBarShown = false;
  loginSnackBarForm: FormGroup;
  constructor(
    private snackbar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.loginSnackBarForm = fb.group({
      showAction: false, // Whether to show an action button
      actionText: '', // The text for the action button
      showActionAsIcon: false, // Whether to show a close button instead of a text button
      link: '' // Leave blank for default
    })
  }
  openSnackBar() {
    this.snackBarShown = true;
    this.snackbar.openFromComponent(CustomSnackBar, { horizontalPosition: "start", panelClass: ['mat-elevation-z3'] });
  }
  closeSnackBar() {
    this.snackBarShown = false;
    this.snackbar.dismiss();
  }
}