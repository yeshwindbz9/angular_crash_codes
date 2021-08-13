import { 
  Component, 
  Input, 
  OnInit, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'], 
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) heading: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { 
    console.log("server-element constructor called!");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("server-element ngOnChanges called!");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("server-element ngOnInit called!");
    console.log("Text Content: "+ this.heading.nativeElement.textContent);
    console.log("Paragraph Content: "+ this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log("server-element ngDoCheck called!");
  }

  ngAfterContentInit(){
    console.log("server-element ngAfterContentInit called!");
    console.log("Paragraph Content: "+ this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log("server-element ngAfterContentChecked called!");
  }

  ngAfterViewInit(){
    console.log("server-element ngAfterViewInit called!");
    console.log("Text Content: "+ this.heading.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log("server-element ngAfterViewChecked called!");
  }

  ngOnDestroy(){
    console.log("server-element ngOnDestroy called!");
  }

}
