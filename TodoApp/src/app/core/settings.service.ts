import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  timerMinutes: number;
  timerTimeOut: number;

  constructor() { 
    this.timerMinutes = 25;
    this.timerTimeOut = 10;
  }
}
