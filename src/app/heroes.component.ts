import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { Task } from './task';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  providers: [
    HeroService
  ]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  tasks: Task[];
  selectedTask: Task;
  finished = false;
  model = {};

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {};

  ngOnInit(): void {
    this.getTasks();
  }

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

  run(task: Task): void {
    this.heroService
      .run(task.taskname, task.runtime)
      .then(task => {
        this.finished = true;
        this.model = task;
        console.log(task);
      });
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
