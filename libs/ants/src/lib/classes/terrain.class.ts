export class Terrain {
  public map!: Array<Array<number>>;
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.initMap();
  }

  private initMap() {
    this.map = Array(this.height).fill(Array(this.width).fill(0));
  }
}
