import { Component } from "@angular/core";

@Component({
  selector: "blog",
  template: `
    <ActionBar title="Blog" class="action-bar"></ActionBar>
    <Image src="~/images/apple.jpg"></Image>
  `,
  styles: [`
    @keyframes spin {
      from { transform: rotate(0); } to { transform: rotate(180); }
    }
    Image {
      animation-name: spin; animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  `]
})
export class Blog {}
