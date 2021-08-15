import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFinalHighlight]'
})
export class FinalHighlightDirective implements OnInit{

  constructor() { }

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'teal';

  @HostBinding("style.backgroundColor") backgroundColor: string;

  @HostListener("mouseenter") mouseOver(eventData: Event){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseLeave(eventData: Event){
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}
