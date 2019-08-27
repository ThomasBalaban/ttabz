import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './template/nav/nav.component';
import { PortfolioPieceComponent } from './components/portfolio-piece/portfolio-piece.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PortfolioPieceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
