import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MusicComponent } from './play music/music.component';
import { HomeComponent } from './home';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        MusicComponent,
        HomeComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }