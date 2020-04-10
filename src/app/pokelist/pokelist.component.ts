import { Component, OnInit } from '@angular/core';
import { PokeService } from '../service/poke.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss']
})
export class PokelistComponent implements OnInit {

  searchType: string;

  arrayPokemon: Array<any> = [];
  limit: number = 0;

  constructor(private pokeService: PokeService) { }

  ngOnInit(): void {
    this.loadPokemon()
  }

  loadPokemon(){
    this.pokeService.getPokemon().subscribe( (pokemon:Array<any>) => {
      this.arrayPokemon.push(...pokemon)
    })
  }

}
