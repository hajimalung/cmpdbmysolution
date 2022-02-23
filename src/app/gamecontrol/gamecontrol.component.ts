import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css'],
})
export class GamecontrolComponent implements OnInit {
  @Output('gameStarted') startEmitter = new EventEmitter<string>(false);
  @Output('gameStopped') stopEmitter = new EventEmitter<string>(false);

  constructor() {}

  ngOnInit(): void {}
  onStart() {
    this.startEmitter.emit('Game Started!');
  }
  onStop() {
    this.stopEmitter.emit('Game Stopped!');
  }
}
