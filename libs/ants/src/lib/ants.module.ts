import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ant } from './classes/ant.class';

@NgModule({
  imports: [CommonModule],
})
export class AntsModule {}
export * from './classes/ant.class';
export * from './classes/terrain.class';
