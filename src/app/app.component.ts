import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crypto-two';
  objectKeys = Object.keys;
  cryptos: any;
  interval: any;
  http: any;

  constructor(private _data: DataService) {}

  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 10000);

    }



  refreshData() {
    this._data.getPrices().subscribe((res) => {
      this.cryptos = res;
      console.log(res);
    });
  }
}

