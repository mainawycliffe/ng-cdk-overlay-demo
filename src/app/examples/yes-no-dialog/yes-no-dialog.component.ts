import { Component, OnInit } from '@angular/core';
import { MyOverlayRef } from 'src/app/myoverlay-ref';

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.scss']
})
export class YesNoDialogComponent implements OnInit {
  constructor(private ref: MyOverlayRef) {}

  ngOnInit() {}

  close(value: string) {
    this.ref.close(value);
  }
}
