import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OverlayComponent } from './overlay/overlay.component';
import { YesNoDialogComponent } from './examples/yes-no-dialog/yes-no-dialog.component';
import { SubscribeComponent } from './examples/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    OverlayComponent,
    YesNoDialogComponent,
    SubscribeComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, OverlayModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OverlayComponent, YesNoDialogComponent, SubscribeComponent]
})
export class AppModule {}
