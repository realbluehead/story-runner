export class Story {
  private _currentScene!: Scene;
}

export class Scene {
  private _key!: string;
  public get key(): string {
    return this._key;
  }
  public set key(key: string) {
    this._key = key;
  }
  private _description!: string;
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  private _objects!: GameObject[];
  private _exits!: Scene[];

  public constructor(key: string) {
    this.key = key;
    this._exits = [];
  }

  public addExit(scene: Scene, bothways: boolean = true) {
    this._exits.push(scene);
    if (bothways) scene.addExit(this, false);
  }
}

export class GameObject {
  private _key!: string;
  public get key(): string {
    return this._key;
  }
  public set key(key: string) {
    this._key = key;
  }
  private _description!: string;
  public get description(): string {
    return this._description;
  }
  public set description(description: string) {
    this._description = description;
  }

  public constructor(key: string, description: string) {
    this.key = key;
    this.description = description;
  }
}
