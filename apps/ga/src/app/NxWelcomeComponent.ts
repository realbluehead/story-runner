import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Game, GameObject, Scene } from '@play/adventure';
import { uicgame } from './game';

/* eslint-disable */

@Component({
  selector: 'play-nx-welcome',
  templateUrl: './NxWelcome.component.html',
  styleUrls: ['./NxWelcome.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  public objects?: GameObject[];
  public exits?: Scene[];
  public scene?: Scene;
  public game?: Game;
  constructor() {}

  ngOnInit(): void {
    this.game = new Game(uicgame);
    this.scene = this.game.start();
    this.objects = this.game.getCurrentObjects();
    this.exits = this.game.getCurrentExits();
  }

  public selectObject(event: any) {
    console.log(event);
  }

  public selectExit(exit: any) {
    console.log(exit);
    this.game?.useExit(exit);
    this.objects = this.game?.getCurrentObjects();
    this.exits = this.game?.getCurrentExits();
  }
}
