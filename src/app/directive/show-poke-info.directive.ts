import { Directive, HostListener, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appShowPokeInfo]'
})
export class ShowPokeInfoDirective {

  constructor(private renderer: Renderer2, private elRef:ElementRef) { 
  }

  
  @HostListener("click") show(){
    this.showPokeInfo()
  }

  showPokeInfo(){
    const aside = this.renderer.selectRootElement('.poke__aside', true);
    const wD =  window.innerWidth
    if (wD < 993){
      this.renderer.addClass(document.body, 'lock')
    }
    this.renderer.addClass(aside, 'show-pokemon-info')
  }

}
