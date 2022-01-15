import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsFeedComponent },
  { path: 'toolbar', component: ToolbarComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
