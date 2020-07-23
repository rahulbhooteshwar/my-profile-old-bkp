import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IntroComponent } from './profile/intro/intro.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { FavoritesComponent } from './profile/favorites/favorites.component';
import { CareerComponent } from './profile/career/career.component';
import { BlogComponent } from './profile/blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { BlogService } from './profile/blog/blog.service';
import { HttpClientModule } from '@angular/common/http';

import { AppService } from './app.service';
import { ContributionsComponent } from './profile/contributions/contributions.component';

@NgModule({
    declarations: [
        AppComponent,
        IntroComponent,
        SkillsComponent,
        FavoritesComponent,
        CareerComponent,
        BlogComponent,
        FooterComponent,
        ContributionsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [BlogService, AppService],
    bootstrap: [AppComponent]
})
export class AppModule { }
