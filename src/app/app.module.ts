import { SetBackgroundDirective } from './CsutomDirective/setbackground.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './CsutomDirective/highlight.directive';
import { HoverDirective } from './CsutomDirective/hover.directive';

@NgModule({
  declarations: [AppComponent, SetBackgroundDirective, HighlightDirective, HoverDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
