import { Pipe, PipeTransform } from '@angular/core';
import { PokeService } from '../service/poke.service';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  constructor(private pokeService: PokeService){}

  transform(value: any[], searchString: string): any[] {
    const arr = this.pokeService.arrayPokemons[0];

    if (!value) {return null}
    if (!searchString){return value}
    if (arr == undefined) {return value}
    let clearArray = []
    let filter = arr.filter( (val, idx) => {
      return val['type'].filter( value =>{
        if (value.type.name.indexOf(searchString) != -1){
          clearArray.push(val)
        }
      })
    })
    return clearArray
  }

}
