import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/icharacter';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: ICharacter[] = [{ name: 'Trucks', level_power: 900 }];

  @Output()
  public pressedCharacter: EventEmitter<ICharacter> = new EventEmitter();

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  emitPressedCharacter(index: number): void {
    console.log(`${index}`);
    this.pressedCharacter.emit(this.characterList[index]);
  }

  onDeleteCharacter(id: string): void {
    console.log(`${id}`);
    this.onDeleteId.emit(id);
  }
}
