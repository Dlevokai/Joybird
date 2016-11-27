import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <div class="demo-layout-transparent mdl-layout mdl-js-layout">
      <header class="mdl-layout__header mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">

          <!-- Title -->
          <span class="mdl-layout-title">Joybird Pottery</span>

          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>

          <!-- Navigation with router directives-->
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" [routerLink]="['/home']">Home</a>
            <a class="mdl-navigation__link" [routerLink]="['/cats']">Products</a>
            <a class="mdl-navigation__link" [routerLink]="['/cats']">About</a>
            <a class="mdl-navigation__link" [routerLink]="['/cats']">Contact</a>
          </nav>
        </div>
      </header>

      
      <main class="mdl-layout__content">
        <div class = "container" style = "max-width: 900px">
        <ngbd-carousel-basic></ngbd-carousel-basic>
        <router-outlet></router-outlet>
        </div>
      </main>
      
    </div>
    `,
})

export class AppComponent  { name = 'Angular'; }
