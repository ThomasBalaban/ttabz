import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioPageComponent } from './static/portfolio-page/portfolio-page.component';
import { HomePageComponent } from './static/home-page/home-page.component';
import { AboutUsPageComponent } from './static/about-us-page/about-us-page.component';
import { ContactPageComponent } from './static/contact-page/contact-page.component';
import { ServicesPageComponent } from './static/services-page/services-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, data: { page: 'home'} },
  { path: 'portfolio', component: PortfolioPageComponent, data: { page: 'port'} },
  { path: 'about', component: AboutUsPageComponent, data: { page: 'about'} },
  { path: 'contact', component: ContactPageComponent, data: { page: 'contact'} },
  { path: 'services', component: ServicesPageComponent, data: { page: 'service'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
