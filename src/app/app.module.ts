import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component'
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsApiService } from './news-api.service';
import { NewsapiService } from './newsapiservice.service';
import { ArticlesBitcoinComponent } from './articles-bitcoin/articles-bitcoin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    NewsFeedComponent,
    ArticlesBitcoinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule,


  ],
  providers: [DataService, NewsApiService, NewsapiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
