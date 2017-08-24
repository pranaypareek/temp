import { Component, OnInit } from '@angular/core';

import { Hero2 } from './hero2';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  powers = ['Node 6.11.1', 'Ruby 2.1.5', 'Go 1.3.3'];

  model = new Hero2(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; console.log('Submitted', this.model); }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero2(42, '', '');
  }
}
