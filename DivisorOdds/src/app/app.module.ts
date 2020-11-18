import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DivisorsComponent } from './divisors/divisors.component';
import { DivisorsGridComponent } from './divisors-grid/divisors-grid.component';
import { DivisorsNumberComponent } from './divisors-number/divisors-number.component';

const appRoutes: Routes = [
  { path: 'home', component: DivisorsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    DivisorsComponent,
    DivisorsGridComponent,
    DivisorsNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
