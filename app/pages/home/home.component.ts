import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../shared/services/news.service"

@Component({
  selector: "home",
  template: `
    <ActionBar title="HackerNews" class="action-bar"></ActionBar>
    <GridLayout rows="auto, *">
      <ListView [items]="newsList" row="1" class="small-spacing">
        <ng-template let-item="item">
          <Label [text]="item.title" class="medium-spacing"></Label>
        </ng-template>
      </ListView>

    </GridLayout>
  `,
  styles: [`
    @keyframes spin {
      from { transform: rotate(0); } to { transform: rotate(360); }
    }
    .logo {
      animation-name: spin; animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    Button {
      width: 25%;
    }
  `],
  providers: [NewsService]
})
export class Home implements OnInit {
  newsList: Array<String> = [];

  constructor(private newsService: NewsService) {

  }

  ngOnInit() {
    this.newsService.load()
      .subscribe(loadedNews => {
        loadedNews.forEach((newsObject) => {
          this.newsList.unshift(newsObject);
          console.log(newsObject);
        });
      });
  }
}
