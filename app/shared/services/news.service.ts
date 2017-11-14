import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class NewsService {
  constructor(private http: Http) {}

  load() {
    let headers = new Headers();

    console.log('LOADING NEWS')
    return this.http.get('https://hnapi.herokuapp.com/summaries?entries=10', {
      headers: headers
    })
    .map(res => res.json())
    .map(data => {
      let news = [];
      data.forEach((n) => {
        news.push(n);
      });
      return news;
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    return Observable.throw(error);
  }
}
