import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';



@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent {
  private data: any = []

  constructor(
    public http: HttpClient,
  ) {}

  getData(){
   const url = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN';
   this.http.get(url).subscribe((res)=>{
     this.data = res
     console.log(this.data)
   })


}
}
