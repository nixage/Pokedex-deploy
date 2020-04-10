import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PokeinfoComponent } from './pokeinfo/pokeinfo.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokeitemComponent } from './pokeitem/pokeitem.component';
import { PokeComponent } from './poke/poke.component';

import { HttpClientModule } from '@angular/common/http';

import { ShowPokeInfoDirective } from './directive/show-poke-info.directive';
import { HidePokeInfoDirective } from './directive/hide-poke-info.directive';

import { FilterPipe } from './pipe/filter.pipe';

import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    FooterComponent,
    PokeinfoComponent,
    PokelistComponent,
    PokeitemComponent,
    PokeComponent,

    ShowPokeInfoDirective,
    HidePokeInfoDirective,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
