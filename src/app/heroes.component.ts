import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { Task } from './task';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ],
  providers: [
    HeroService
  ]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  tasks: Task[];
  selectedTask: Task;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {};

  ngOnInit(): void {
    this.getTasks();
  }

  /*
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }

    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
   }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }*/

  getTasks(): void {
    this.heroService
      .getTasks()
      .then(tasks => {
        this.tasks = tasks;
      });
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  gotoDetail(task: Task): void {
    this.router.navigate(['/detail', task.taskname]);
  }

  delete(task: Task): void {
    this.heroService
      .delete(task.taskname, task.runtime)
      .then(() => {
        this.tasks = this.tasks.filter(t => t !== task);
        if (this.selectedTask === task) { this.selectedTask = null; }
      });
  }
}
