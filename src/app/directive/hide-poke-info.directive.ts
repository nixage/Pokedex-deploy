import { Directive, HostListener, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appHidePokeInfo]'
})
export class HidePokeInfoDirective {

  constructor(private renderer: Renderer2, private elRef:ElementRef) { }

  @HostListener("click") hide(){
    this.hidePokeInfo()
  }

  hidePokeInfo(){
    const aside = this.renderer.selectRootElement('.poke__aside', true);
    this.renderer.removeClass(document.body, 'lock')
    this.renderer.removeClass(aside, 'show-pokemon-info')
  }


}
