import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ThreeDComponent } from './components/three-d/three-d.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { HoverCardComponent } from './components/hover-card/hover-card.component';
import { ImageInfoComponent } from './components/image-info/image-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ThreeDComponent,
    ExperienceComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    HoverCardComponent,
    ImageInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
