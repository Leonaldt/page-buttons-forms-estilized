import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { CustomSnackBar } from './custom-snackbar/custom-snackbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRouting } from './app.routing';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRouting
  ],
  declarations: [
    AppComponent,
    CustomSnackBar,
    LoginPageComponent,
    HomePageComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CustomSnackBar
  ]
})
export class AppModule { }
