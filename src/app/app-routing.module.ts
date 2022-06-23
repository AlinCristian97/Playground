import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { Base32Component } from './components/base32/base32.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'base32', component: Base32Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
