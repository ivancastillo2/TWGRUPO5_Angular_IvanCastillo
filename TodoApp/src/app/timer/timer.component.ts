import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../core/settings.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  minutes: number = 24;
  seconds: number = 59;
  isPaused: boolean = false;
  buttonLabel: string = 'Start';

  constructor(private settingsService: SettingsService) {
      this.reset();
      setInterval(() => this.tick(), 1000)
  }

  reset() {
    this.minutes = this.settingsService.timerMinutes -1;
    this.seconds = 59;
    this.buttonLabel = 'Start';
    this.togglePause();
  }

  private tick() {
    if(!this.isPaused) {
      this.buttonLabel = 'Pause';
      if(--this.seconds < 0) {
        this.seconds = 59;
        if(--this.minutes < 0) {
          this.reset()
        }
      }
    }
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    if(this.minutes < 24 || this.seconds < 59) {
      this.buttonLabel = this.isPaused
                            ? 'Resume'
                            : 'Pause';
    }
  }

  onCountdownCompleted(): void {
    alert('Se acabo el tiempo!');
  }

  ngOnInit(): void {
  }

}
