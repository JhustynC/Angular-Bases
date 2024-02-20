import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/icharacter';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root', //!--> Nuestro servicio va a ser un singleton en toda la aplicacion
})
export class DbzService {
  public character: ICharacter = {
    name: '',
    level_power: 0,
  };

  public characters: ICharacter[] = [
    { id: uuid(), name: 'Krilin', level_power: 500 },
    { id: uuid(), name: 'Kakaroto', level_power: 19500 },
    { id: uuid(), name: 'Vegeta', level_power: 7500 },
  ];

  addNewCharacter(character: ICharacter): void {
    // debugger;
    if (character && this.characters.indexOf(character) === -1) {
      const newCharacter: ICharacter = { id: uuid(), ...character };
      // character.id = uuid();
      this.characters.push(newCharacter);
    }
  }

  pressedCharacter(character: ICharacter): void {
    if (character) {
      this.character = character;
    }
  }

  onDeleteCharacter(index: number): void {
    if (this.characters[index]) {
      this.characters.splice(index, 1);
    }
  }

  onDeleteCharacterById(id: string): void {
    if (this.characters.filter((character) => character.id === id)) {
      this.characters = this.characters.filter(
        (character) => character.id !== id
      );
    }
  }
}
