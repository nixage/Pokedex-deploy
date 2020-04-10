import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeComponent } from './poke/poke.component';


const routes: Routes = [
  {path: '', component: PokeComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
