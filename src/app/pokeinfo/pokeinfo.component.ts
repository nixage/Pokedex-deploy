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
    this.pokeService.pokeSubjet.subscribe( (pokemon) => {
      this.pokemon = pokemon
    })
  }

}
