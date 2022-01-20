import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsapiService} from '../newsapiservice.service';

@Component({
  selector: 'app-articles-javascript',
  templateUrl: './articles-bitcoin.component.html',
  styleUrls: ['./articles-bitcoin.component.css'],
})
export class ArticlesBitcoinComponent implements OnInit {
  BCarticles$: Observable<any>;

  constructor(private newsapi: NewsapiService) {}

  ngOnInit() {
    // Bitcoin news articles
    this.BCarticles$ = this.newsapi.getArticlesBitcoin();
  }
}
//Nothing to see here
