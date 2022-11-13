import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Ant, AntLocation, Terrain } from '@play/ants';

/* eslint-disable */

@Component({
  selector: 'play-nx-welcome',
  templateUrl: 'nx-welcome.component.html',
  styleUrls: ['nx-welcome.component.scss'],
})
export class NxWelcomeComponent implements OnInit, OnDestroy {
  @ViewChild('canvas') canvas: ElementRef | undefined;
  private redrawFPS = 1;
  private timer: any;
  private ctx: any;
  public frame;
  private ants: Ant[] = [];
  private terrain: Terrain = new Terrain(1, 1);
  private antImage: HTMLImageElement | undefined;

  constructor() {
    this.frame = 0;
    this.createTerrain();
    this.createSomeAnts();
    this.getAntImage();
  }

  public ngOnInit(): void {
    this.initTimer();
  }

  public ngAfterViewInit(): void {
    this.ctx = this.canvas?.nativeElement.getContext('2d');
  }
  private createTerrain() {
    this.terrain = new Terrain(640, 480);
  }
  private createSomeAnts(): void {
    for (let i = 0; i < 5; i++) {
      const location: AntLocation = {
        x: Math.round(Math.random() * 640),
        y: Math.round(Math.random() * 480),
      };
      this.ants.push(new Ant(location));
    }
    console.log(this.ants);
  }

  public ngOnDestroy() {
    clearInterval(this.timer);
  }

  private initTimer() {
    this.timer = setInterval(() => {
      this.redraw();
    }, 1000 / this.redrawFPS);
  }
  private redraw() {
    this.frame++;
    this.clearFrame();
    this.renderFrame();
  }
  private clearFrame() {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.rect(0, 0, 640, 480);
    ctx.fillStyle = `#cccccc`;
    ctx.fill();
  }
  private renderFrame() {
    const ctx = this.ctx;
    var imgData = ctx.createImageData(640, 480);
    let color = [0, 255, 0];
    // ground
    this.terrain.map.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === 0) color = [255, 255, 255];
        else color = [0, 255, 0];

        imgData.data[y * 640 * 4 + x * 4] = color[0];
        imgData.data[y * 640 * 4 + 1 + x * 4] = color[1];
        imgData.data[y * 640 * 4 + 2 + x * 4] = color[2];
        imgData.data[y * 640 * 4 + 3 + x * 4] = 255;
      });
    });
    ctx.putImageData(imgData, 0, 0);
    // ants
    ctx.fillStyle = `#0000ff`;
    this.ants.forEach((ant) => {
      const ax = ant.getLocation().x;
      const ay = ant.getLocation().y;
      if (this.antImage) {
        console.log(`Draw ant at ${ax},${ay}`);
        ctx.drawImage(this.antImage, ax, ay);
      }
    });
  }

  private getAntImage() {
    this.antImage = new Image();
    this.antImage.src = 'assets/ant.png';
    this.antImage.onload = function () {
      console.log('carregada');
    };
  }
}
