import { SetBackgroundDirective } from './CsutomDirective/setbackground.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './CsutomDirective/highlight.directive';

@NgModule({
  declarations: [AppComponent, SetBackgroundDirective, HighlightDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
