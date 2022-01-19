import { Component} from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
})
export class NewsFeedComponent {
  static use(_arg0: any) {
    throw new Error('Method not implemented.');
  }
  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {
    //load articles
    this.newsapi
      .initArticles()
      .subscribe((data) => ((this.mArticles = data['articles'])));
    //load news sources
    this.newsapi
      .initSources()
      .subscribe((data) => ((this.mSources = data['sources'])));

  }

  searchArticles(source) {
    console.log('selected source is: ' + source);
    this.newsapi
      .getArticlesByID(source)
      .subscribe((data) => ((this.mArticles = data['articles'])));
  }
}

//const cors = require('cors');
//const app = NewsFeedComponent
//app.use(cors());

declare var require: any;
// declare var header: any;

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
  from: '2021-01-01',
  to: '2022-12-31',
  language: 'en',
  sortBy: 'relevancy',
  page: 1
}).then((response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
}))
