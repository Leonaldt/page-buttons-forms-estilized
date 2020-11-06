import { Component } from '@angular/core';
import { MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html'
})
export class CustomSnackBar {
  constructor(private snackBarRef: MatSnackBarRef<CustomSnackBar>){}
  close(){
    this.snackBarRef.dismiss();
  }
}