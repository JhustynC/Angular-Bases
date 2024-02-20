import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/icharacter';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<ICharacter> = new EventEmitter();

  @Input()
  public character: ICharacter = {
    name: '',
    level_power: 0,
  };

  emitCharacter(): void {
    console.log(this.character);

    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);

    this.character = { name: '', level_power: 0 };
  }

}
