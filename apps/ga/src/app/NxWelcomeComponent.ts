import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Game } from '@play/adventure';
import { uicgame } from './game';

/* eslint-disable */

@Component({
  selector: 'play-nx-welcome',
  templateUrl: './NxWelcome.component.html',
  styleUrls: ['./NxWelcome.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const game = new Game(uicgame);
    console.log(game);
  }
}
