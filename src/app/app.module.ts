import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  declarations: [AppComponent, OverlayComponent],
  imports: [BrowserModule, OverlayModule],
  providers: [],
  bootstrap: [AppComponent, OverlayComponent]
})
export class AppModule {}
