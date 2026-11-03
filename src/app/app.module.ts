import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }