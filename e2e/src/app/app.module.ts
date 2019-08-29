import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './template/nav/nav.component';
import { PortfolioPieceComponent } from './components/portfolio-piece/portfolio-piece.component';
import { HeaderComponent } from './header/header/header.component';
import { AboutPlateComponent } from './aboutPlate/about-plate/about-plate.component';
import { MissionPlateComponent } from './missionPlate/mission-plate/mission-plate.component';
import { TakeLookComponent } from './takeLook/take-look/take-look.component';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PortfolioPieceComponent,
    HeaderComponent,
    AboutPlateComponent,
    MissionPlateComponent,
    TakeLookComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}


