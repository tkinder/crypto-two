import { Component} from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
})
export class NewsFeedComponent {
  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {
    //load articles
    this.newsapi
      .initArticles()
      .subscribe((data) => JSON.stringify((this.mArticles = data['articles'])));
    //load news sources
    this.newsapi
      .initSources()
      .subscribe((data) => JSON.stringify((this.mSources = data['sources'])));
  }

  searchArticles(source) {
    console.log('selected source is: ' + source);
    this.newsapi
      .getArticlesByID(source)
      .subscribe((data) => JSON.stringify((this.mArticles = data['articles'])));
  }
}

declare var require: any;

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('35ca3239aa754462b51bb38b221afbbc');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

// To query /v2/everything
// You must include at least one q, source, or domain
newsapi.v2.everything({
  q: 'bitcoin',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk, techcrunch.com',
  from: '2017-12-01',
  to: '2017-12-12',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then((response: any) => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});

