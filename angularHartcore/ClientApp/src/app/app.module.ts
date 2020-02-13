import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PageResolverService } from './services/page-resolver.service';
import { HeroComponent } from './components/hero/hero.component';
import { UniqueSellingPointsComponent } from './components/unique-selling-points/unique-selling-points.component';
import { TextAndImageComponent } from './components/text-and-image/text-and-image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HeroComponent,
    UniqueSellingPointsComponent,
    TextAndImageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '**', component: HomeComponent, resolve: { pageData: PageResolverService } },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
