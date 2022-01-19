import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  api_key = '35ca3239aa754462b51bb38b221afbbc';

  constructor(private http: HttpClient) {}
  initSources() {
    return this.http.get(
      'https://my-neato-cors-server.herokuapp.com/https://newsapi.org/v2/sources?language=en&apiKey=' +
        this.api_key
    );
  }
  initArticles() {
    return this.http.get(
      'https://my-neato-cors-server.herokuapp.com/https://newsapi.org/v2/everything?q=bitcoin&apiKey=' +
        this.api_key
    );
  }
  getArticlesByID(source: String) {
    return this.http.get(
      'https://my-neato-cors-server.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=' +
        source +
        '&apiKey=' +
        this.api_key
    );
  }
}
