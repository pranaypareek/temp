import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
//import { Task } from './task';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [
    './hero-detail.component.css'
  ]
})
//export class HeroDetailComponent implements OnInit {
export class HeroDetailComponent {
  @Input() hero: Hero;
  @Input() task: any = {
    info: null
  };

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {};

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getTaskInfo(params.get('id')))
      .subscribe(res => { console.log(res); this.task = res });

     console.log(this.task);
  }

  goBack(): void {
    this.location.back();
  }

  /*
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }*/
}
