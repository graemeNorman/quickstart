import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Main App component
import { AppComponent }  from './app.component';

// Components
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

// Directives
import { mainNavigation } from './directives/navigation/navigation.directive';

// Routing
import { routing } from "./app.routing";


@NgModule({
  imports:      [ BrowserModule,
                  routing
                ],
  declarations: [ AppComponent,
                  HomeComponent,
                  AboutComponent,
                  mainNavigation
                ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
