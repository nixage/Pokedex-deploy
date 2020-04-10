import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeComponent } from './poke/poke.component';


const routes: Routes = [
  {path: '', redirectTo: 'poke', pathMatch: 'full'},
  {path: 'poke', component: PokeComponent},
  {path: '**', redirectTo: 'poke', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
