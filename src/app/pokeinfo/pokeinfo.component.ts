import { Component, OnInit } from '@angular/core';
import { PokeService } from '../service/poke.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokeinfo',
  templateUrl: './pokeinfo.component.html',
  styleUrls: ['./pokeinfo.component.scss']
})
export class PokeinfoComponent implements OnInit {

  pokemon: any;

  constructor(private pokeService: PokeService, private activadetRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    // const pokemons = this.pokeService.arrayPokemons;
    // this.activadetRoute.params.subscribe( data => {
    //   this.pokemon = pokemons.filter( (val)=> data['id'] === val.name);
    //   console.log(this.pokemon)
    //   console.log(pokemons)
    // })
    this.pokeService.pokeSubjet.subscribe( (pokemon) => {
      this.pokemon = pokemon
      console.log(this.pokemon)
    })
  }

}
