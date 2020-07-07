import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" routerLink="/">My Movie Watchlist</a>

      <div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" routerLink="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/my-list">My List</a>
          </li>
        </ul>
      </div>
</nav>
  `,
  styles: ['']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
