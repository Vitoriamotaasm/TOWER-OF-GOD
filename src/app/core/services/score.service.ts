import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private scoreSubject = new BehaviorSubject<number>(0);
  score$ = this.scoreSubject.asObservable();

  addPoints(points: number) {
    this.scoreSubject.next(this.scoreSubject.value + points);
  }
  
  resetScore(){
    this.scoreSubject.next(0);
  }

}
