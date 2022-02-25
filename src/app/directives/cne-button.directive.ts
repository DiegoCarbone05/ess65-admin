import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: 'cne-metro-button'
})
export class CneButtonDirective {

  constructor(
    private renderer: Renderer2,
    private el:ElementRef<HTMLButtonElement>,){
    this.renderer.addClass(this.el.nativeElement, "mi-puta-clase");
    this.el.nativeElement.innerText = 'forro';
    console.log("elemento directiva",this.el.nativeElement)
  }

  @HostListener('onmouseover')
  unaFuncion(){
    console.log('asd')

  }
}
