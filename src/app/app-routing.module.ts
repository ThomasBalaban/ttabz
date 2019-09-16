import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioPageComponent } from './static/portfolio-page/portfolio-page.component';
import { HomePageComponent } from './static/home-page/home-page.component';
import { AboutUsPageComponent } from './static/about-us-page/about-us-page.component';
import { ContactPageComponent } from './static/contact-page/contact-page.component';
import { ServicesPageComponent } from './static/services-page/services-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'about', component: AboutUsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'services', component: ServicesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
