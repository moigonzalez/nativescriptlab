import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "home",
  template: `
    <ActionBar title="Homepage" class="action-bar"></ActionBar>
    <Image src="~/images/apple.jpg"></Image>
    <Button text="See blog" class="submit-button" (tap)="goToBlog()"></Button>
  `,
  styles: [`
    @keyframes spin {
      from { transform: rotate(0); } to { transform: rotate(360); }
    }
    Image {
      animation-name: spin; animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  `]
})
export class Home {

  constructor(private router: Router) {

  }

  goToBlog() {
    this.router.navigate(['/blog']);
  }
}
