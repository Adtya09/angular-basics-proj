import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { RestCallComponent } from './rest-call/rest-call.component';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';

@NgModule({
  imports: [BrowserModule, FormsModule,HttpClientModule],
  declarations: [AppComponent, AddressCardComponent,RestCallComponent],
  bootstrap: [AppComponent],
  providers:[RestService]
})
export class AppModule {}
