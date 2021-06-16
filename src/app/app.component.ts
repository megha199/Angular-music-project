import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<p appHighlight>Demo of Custom Directive</p>`,  
  template: `<p><appHighlight>Highlight Directive using FeatureModule is applied!!</appHighlight></p>`,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  message:String = "";
/*
  show(val:any):void {
    this.message=val.value;
  }
*/

  show(ev:Event):void {
    const element = ev.currentTarget as HTMLInputElement
    const value = element.value
    console.log(value);  
    this.message=value;
  }
}