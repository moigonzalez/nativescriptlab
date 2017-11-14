import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../shared/services/news.service"

@Component({
  selector: "home",
  template: `
    <ActionBar title="HackerNews" class="action-bar"></ActionBar>
    <GridLayout rows="auto, *">
      <ListView [items]="newsList" row="1" class="news">
        <ng-template let-item="item">
          <Label [text]="item.title" class="news__item"></Label>
        </ng-template>
      </ListView>
    </GridLayout>
  `,
  styleUrls: ['./pages/home/homecomponent.css'],
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
          this.newsList.push(newsObject);
        });
      });
  }
}
