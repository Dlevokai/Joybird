import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  
  <div class = "container" style = "max-width: 900px">
   <ngbd-carousel-basic></ngbd-carousel-basic>
   </div>`
})
export class AppComponent  { name = 'Angular'; }
