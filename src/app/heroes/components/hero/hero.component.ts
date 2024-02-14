import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public nombre: string = 'ironman';
  public edad: number = 35;
  public cap_name: string;

  public constructor() {
    this.cap_name = this.nombre;
  }

  public get capitalizeName(): string {
    return this.nombre.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  changeHero(): void {
    this.nombre = 'Spiderman';
  }

  changeAge(): void {
    this.edad = 23;
  }

  resetHero(): void {
    this.nombre = 'ironman';
    this.edad = 35;
  }
}
