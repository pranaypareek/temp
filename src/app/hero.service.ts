import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { Task } from './task';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  private apiUrl = 'http://localhost:50000';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {};

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
  /*
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http.put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({ name: name}),
        { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  */

  getTasks(): Promise<Task[]> {
    const url = `${this.apiUrl}/tasks`;

    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json().tasks)
      .catch(this.handleError);
  }

  getTaskInfo(taskname: string): Promise<{}> {
    const url = `${this.apiUrl}/tasks/${taskname}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }


  create(model: any): Promise<Hero> {
    const url = `${this.apiUrl}/tasks`;
    return this.http
      .post(url, model,
        { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  run(taskname: string, runtime: string): Promise<{}> {
    const url = `${this.apiUrl}/tasks/${taskname}/run`;
    return this.http
      .post(url, { runtime: runtime },
        { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  delete(taskname: string, runtime: string): Promise<void> {
    const url = `${this.apiUrl}/tasks/${taskname}`;
    return this.http.delete(url, { body: { runtime: runtime }})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
