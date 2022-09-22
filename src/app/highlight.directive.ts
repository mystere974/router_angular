import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
      //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }
  @HostListener('mouseenter')mouseEnterEvent(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }
  @HostListener('mouseleave')mouseLeaveEvent(eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}

