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
  public get objects(): GameObject[] {
    return this._objects;
  }
  public set objects(value: GameObject[]) {
    this._objects = value;
  }
  private _exits!: Scene[];
  public get exits(): Scene[] {
    return this._exits;
  }
  public set exits(value: Scene[]) {
    this._exits = value;
  }

  public constructor(key: string) {
    this.key = key;
    this._exits = [];
  }

  public addExit(scene: Scene, bothways: boolean = true) {
    this._exits.push(scene);
    if (bothways) scene.addExit(this, false);
  }
  public addObject(obj: GameObject) {
    this._objects.push(obj);
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
