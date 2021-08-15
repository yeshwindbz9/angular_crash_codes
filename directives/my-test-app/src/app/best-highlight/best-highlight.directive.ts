import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBestHighlight]'
})
export class BestHighlightDirective {

  constructor() { }

  @HostBinding("style.backgroundColor") backgroundColor: string;

  @HostListener("mouseenter") mouseOver(eventData: Event){
    this.backgroundColor = "lightsteelblue";
  }

  @HostListener("mouseleave") mouseLeave(eventData: Event){
    this.backgroundColor = "transparent";
  }

}
