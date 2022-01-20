import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { feed } from './Feed.component';


@Injectable({
  providedIn: 'root',
})
export class RestService {

  constructor(private http: HttpClient) {}


url: string = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN'

getFeed()
{
  return this.http.get.<feed[]>(this.url);
  }
}
