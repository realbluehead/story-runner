import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Game, GameObject, Scene } from '@play/adventure';
import { elementAt } from 'rxjs';
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
  public inventory?: GameObject[];
  public exits?: Scene[];
  public scene?: Scene;
  public game?: Game;
  public message?: string;
  public currentAction?: string;
  constructor() {
    this.currentAction = undefined;
    this.inventory = [];
  }

  ngOnInit(): void {
    this.game = new Game(uicgame);
    this.scene = this.game.start();
    this.objects = this.game.getCurrentObjects();
    this.exits = this.game.getCurrentExits();
  }

  public selectObject(obj: any) {
    switch (this.currentAction) {
      case 'inspect':
        this.message = obj.description;
        break;
      case 'get':
        this.message = `You get ${obj.description}`;
        this._getObject(obj.key);
        break;
    }
    this.currentAction = 'inspect';
  }

  public selectExit(exit: any) {
    this.message = `You used exit ${exit.name}`;
    this.scene = this.game?.useExit(exit);
    this.objects = this.game?.getCurrentObjects();
    this.exits = this.game?.getCurrentExits();
  }
  public startAction(action: string) {
    this.currentAction = action;
  }

  private _getObject(objKey: string) {
    // TODO refactor and do this in the scenes model
    const idx = this.objects?.findIndex(
      (obj: GameObject) => obj.key === objKey
    );
    console.log(idx);
    if (idx !== undefined) {
      const obj = this.objects?.at(idx);
      if (obj) this.inventory?.push(obj);
      this.objects?.splice(idx, 1);
    }
  }
}
