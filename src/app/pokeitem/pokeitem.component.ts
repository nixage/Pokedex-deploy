import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { PokeService } from '../service/poke.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokeitem',
  templateUrl: './pokeitem.component.html',
  styleUrls: ['./pokeitem.component.scss']
})
export class PokeitemComponent implements OnInit {

  @Input() pokemon;

  constructor(private pokeService: PokeService, private renderer: Renderer2, private router: Router, private elRef:ElementRef) { }

  ngOnInit(): void {
  }

  showPokemonInfo(){
    this.pokeService.pokeSubjet.next(this.pokemon)
  }

}
