export interface AntLocation {
  x: number;
  y: number;
}
export interface AntStatus {
  health: number;
  energy: number;
  speed: number;
}
export class Ant {
  private id: number | undefined;
  private location: AntLocation;
  private status: AntStatus | undefined;

  public constructor(location: AntLocation) {
    this.id = 0;
    this.location = location;
    this.createVitals();
  }

  public moveTo(x: number, y: number) {
    this.location = { x, y };
  }
  public getLocation(): AntLocation {
    return this.location;
  }

  private createVitals(): void {
    this.status = {
      health: this.randomInt(10, 20),
      energy: this.randomInt(18, 20),
      speed: this.randomInt(1, 10),
    };
  }

  private randomInt(min: number, max: number): number {
    return min + Math.round(Math.random() * (max - min));
  }
}
