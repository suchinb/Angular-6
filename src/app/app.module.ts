import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard';
import { SideNavigationComponent } from './side-navigation';
// import { RactiveformModule } from './ractiveform/ractiveform.module';
// import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SideNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // RactiveformModule,
    // SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
