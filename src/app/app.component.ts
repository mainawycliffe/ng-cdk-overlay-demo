import { Component, TemplateRef } from '@angular/core';
import { OverlayService } from './overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  content = 'Hello, who am i?';

  constructor(private overlayService: OverlayService) {}

  open(content: TemplateRef<any> | string) {
    const ref = this.overlayService.open(content, null);

    ref.afterClosed$.subscribe(data => {
      console.log(data);
    });
  }
}
