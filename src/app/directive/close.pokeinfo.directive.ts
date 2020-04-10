import { Directive, HostListener, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appClosePokeinfo]'
})
export class ClosePokeinfoDirective implements AfterViewInit {

  displayNone: boolean = false;

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(event) {
    if (event <= 767 ){
      if (this.displayNone){
        return;
      }
      const aside = this.elRef.nativeElement.querySelector('.poke__aside');
      // this.renderer.addClass(aside, 'hide-pokemon-info-mobile')
      this.displayNone = true;
    }
    else{
      if (!this.displayNone){return}
      const aside = this.elRef.nativeElement.querySelector('.poke__aside')
      // this.renderer.removeClass(aside, 'hide-pokemon-info')
      this.displayNone = false;
    }
  }

  constructor(private elRef:ElementRef, private renderer: Renderer2) { 
  }

  ngAfterViewInit(){
    this.onResize(window.innerWidth)
  }



}
