import { Component, TemplateRef } from '@angular/core';
import { OverlayService } from './overlay.service';
import { ComponentType } from '@angular/cdk/portal';
import { YesNoDialogComponent } from './examples/yes-no-dialog/yes-no-dialog.component';
import { SubscribeComponent } from './examples/subscribe/subscribe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  content = 'Hello, who am i?';
  yesNoComponent = YesNoDialogComponent;
  subscribeComponent = SubscribeComponent;

  constructor(private overlayService: OverlayService) {}

  open(content: TemplateRef<any> | ComponentType<any> | string) {
    const ref = this.overlayService.open(content, null);

    ref.afterClosed$.subscribe(data => {
      console.log(data);
    });
  }
}
