import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TrustHtmlPipe } from 'trust-html-pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TrustHtmlPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
