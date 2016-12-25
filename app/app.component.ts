import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <div class="demo-layout-transparent mdl-layout mdl-js-layout">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span class="mdl-layout-title">Joybird Pottery</span>

          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>

          <!-- Navigation with router directives-->
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" [routerLink]="['/home']">Home</a>
            <a class="mdl-navigation__link" [routerLink]="['/products']">Products</a>
            <a class="mdl-navigation__link" [routerLink]="['/about']">About/Contact</a>
            <a class="mdl-navigation__link" [routerLink]="['/cats']">Contact</a>
          </nav>
        </div>
      </header>

      
      <main class="mdl-layout__content">
        <router-outlet></router-outlet>
      </main>
      <button class = "mdl-button mdl-button--raised mdl-button--accent">
               Button
      </button>
    </div>
    `,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent  { name = 'Angular'; }
