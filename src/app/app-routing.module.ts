import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmovieComponent } from './bookmovie/bookmovie.component';
import { HomeComponent } from './home/home.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'bookMovie', component:BookmovieComponent},
  {path: 'bookings', component:MyBookingsComponent},
  {path: '**', redirectTo: '/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
