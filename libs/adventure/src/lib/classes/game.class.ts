import { GameObject, Scene } from './story.class';

export interface GameImport {
  title: string;
  start_scene: string;
  scenes: ScenesImport;
  objects: ObjectsImport;
  rules: RuleImport[];
}

export interface RuleImport {
  action: string;
  param1: string;
  param2?: string;
  outcomes: OutcomeImport[];
}
export interface OutcomeImport {
  type: string;
  params: string[];
}
export interface ScenesImport {
  [key: string]: SceneImport;
}
export interface ObjectsImport {
  [key: string]: ObjectImport;
}
export interface ObjectImport {
  description: string;
  get?: boolean;
}
export interface SceneImport {
  name: string;
  exits?: ExitImport[];
  objects?: string[];
}
export interface ExitImport {
  key: string;
  bothways?: boolean;
}

export class Game {
  private _title!: string;
  private _scenes!: { [key: string]: Scene };
  private _startScene!: Scene;
  public get startScene(): Scene {
    return this._startScene;
  }
  public set startScene(value: Scene) {
    this._startScene = value;
  }
  public get scenes(): { [key: string]: Scene } {
    return this._scenes;
  }
  public set scenes(value: { [key: string]: Scene }) {
    this._scenes = value;
  }
  private _objects!: { [key: string]: GameObject };
  public get objects(): { [key: string]: GameObject } {
    return this._objects;
  }
  public set objects(value: { [key: string]: GameObject }) {
    this._objects = value;
  }
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  private _currentScene!: Scene;
  private _rules: any;

  public constructor(game?: GameImport) {
    this._rules = {};
    if (game) {
      this._importGame(game);
    }
  }
  public start(): Scene {
    this._currentScene = this.startScene;
    return this._currentScene;
  }
  public getCurrentObjects() {
    return this._currentScene.objects;
  }
  public getCurrentExits() {
    return this._currentScene.exits;
  }

  public useExit(exit: Scene) {
    this._currentScene = exit;
    return this._currentScene;
  }

  private _importGame(game: GameImport) {
    this.title = game.title;
    this.objects = {};
    this.scenes = {};
    // Add Objects
    for (const key in game.objects) {
      const cobj = game.objects[key];
      const obj = new GameObject(key, cobj.description, {
        get: cobj.get ? cobj.get : false,
      });
      this._objects[key] = obj;
    }
    // Add Scenes without references
    for (const key in game.scenes) {
      const scene = new Scene(key);
      const objs = game.scenes[key].objects?.map((name) =>
        this._getObjectByName(name)
      );
      if (objs) scene.objects = objs;
      scene.name = game.scenes[key].name;
      this._scenes[key] = scene;
    }
    // Add connections between scenes
    for (const key in game.scenes) {
      const exits = game.scenes[key].exits;
      exits?.forEach((exit: ExitImport) => {
        this._scenes[key].addExit(this.scenes[exit.key], exit.bothways);
      });
    }
    // Add rules
    game.rules.forEach((rule: RuleImport) => {
      if (!this._rules[rule.action]) {
        this._rules[rule.action] = {};
      }
      if (!this._rules[rule.action][rule.param1]) {
        this._rules[rule.action][rule.param1] = [];
      }
      this._rules[rule.action][rule.param1].push(rule);
    });
    console.log(this._rules);
    // Set Starting scene
    this.startScene = this._getSceneByName(game.start_scene);
  }
  private _getSceneByName(name: string): Scene {
    return this.scenes[name];
  }
  private _getObjectByName(name: string): GameObject {
    return this.objects[name];
  }
}
