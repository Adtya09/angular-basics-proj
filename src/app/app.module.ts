import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddressCardComponent } from './address-card/address-card.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AddressCardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
