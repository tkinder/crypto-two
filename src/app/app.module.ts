import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { HomeComponent } from './home/home.component'
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    HomeComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    MaterialModule,
    BrowserAnimationsModule,


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
