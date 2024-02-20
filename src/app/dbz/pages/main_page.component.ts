import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../interfaces/icharacter';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main_page.component.html',
  styleUrl: './main_page.component.css',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): ICharacter[] {
    return [...this.dbzService.characters];
  }

  get character(): ICharacter {
    return this.dbzService.character;
  }

  onDeleteCharacterById(id: string): void {
    this.dbzService.onDeleteCharacterById(id);
  }

  addNewCharacter(character: ICharacter): void {
    this.dbzService.addNewCharacter(character);
  }

  pressedCharacter(character: ICharacter): void {
    this.dbzService.pressedCharacter(character);
  }
}
