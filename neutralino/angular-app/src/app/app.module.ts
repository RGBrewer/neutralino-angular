import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NeutralinoService } from './services/neutralino.service'

declare global {
  interface Window {
    neutralino?: any;
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NeutralinoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
