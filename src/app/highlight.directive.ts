import { Directive,HostListener, ElementRef } from '@angular/core';

@Directive({
  //selector: '[appHighlight]'
  selector: 'appHighlight'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { }

  
@HostListener("mouseenter") onMouseEnter() { 
	//this.highlight("springgreen");
  this.el.nativeElement.style.backgroundColor = "blue";
	}

	 @HostListener("mouseleave") onMouseLeave() {
	//	this.highlight("hotpink");
  this.el.nativeElement.style.backgroundColor = "transparent";
	}
  /*
private highlight(color:string) {
	this.el.nativeElement.style.backgroundColor = color
}
*/

}