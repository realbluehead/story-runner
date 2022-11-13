import { Scene } from './story.class';

export interface GameImport {
  title: string;
  scenes: ScenesImport;
}
export interface ScenesImport {
  [key: string]: SceneImport;
}

export interface SceneImport {
  exits?: ExitImport[];
}
export interface ExitImport {
  key: string;
  bothways: boolean;
}

export class Game {
  private _title!: string;
  private _scenes!: { [key: string]: Scene };
  public get scenes(): { [key: string]: Scene } {
    return this._scenes;
  }
  public set scenes(value: { [key: string]: Scene }) {
    this._scenes = value;
  }
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  public constructor(game?: GameImport) {
    if (game) {
      this._importGame(game);
    }
  }

  private _importGame(game: GameImport) {
    this.title = game.title;
    this.scenes = {};
    // Add Scenes without references
    for (const key in game.scenes) {
      const scene = new Scene(key);
      this._scenes[key] = scene;
    }
    // Add connections between scenes
    for (const key in game.scenes) {
      const exits = game.scenes[key].exits;
      exits?.forEach((exit: ExitImport) => {
        this._scenes[key].addExit(this.scenes[exit.key], exit.bothways);
      });
    }
  }
}
