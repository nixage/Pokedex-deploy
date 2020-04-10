import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, delay } from 'rxjs/operators';
import { Observable, Subject, forkJoin, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  pokeSubjet = new Subject();
  arrayPokemons: any[] = []
  pokeOffset = 0;

  baseUrl = "https://pokeapi.co/api/v2";
  baseImageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

  constructor(private http: HttpClient) { }

  getPokemonImage(index):string {
    return `${this.baseImageUrl}${index}.png`;
  }

  getPokemonByid(id){
    return this.http.get(`${this.baseUrl}/pokemon/${id}`)
  }

  getPokemon(): Observable<Array<any>>{

    let allPokemonUrl = [];

    for (let i = 0; i < 12; i++){
      allPokemonUrl.push(this.http.get(`${this.baseUrl}/pokemon/${this.pokeOffset + i + 1}`))
    }
    this.pokeOffset += 12
    return forkJoin(allPokemonUrl).pipe(
      map( res => {
        let arrayPokemons = []
        res.forEach(( val, index ) => {
          const pokemon =  {
            name: val['name'],
            image: val['sprites']['front_default'],
            type: val['types'],
            stats: val['stats']
          }
          arrayPokemons.push(pokemon)
        })
        this.arrayPokemons.push(arrayPokemons)
        return arrayPokemons
      })
    )
  }

}
