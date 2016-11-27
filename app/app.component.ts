import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>hi</a>
                <ul class='nav navbar-nav'>
                   <li><a [routerLink]="['/home']">Home</a></li>
                     <li><a [routerLink]="['/cats']">cats</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
  </div>
  <div class = "container" style = "max-width: 900px">
   <ngbd-carousel-basic></ngbd-carousel-basic>
   </div>`,
})

export class AppComponent  { name = 'Angular'; }
