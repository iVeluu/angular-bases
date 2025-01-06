import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../types/CharacterType';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Output()
  public onDeletedCharacter: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  public charactersList: Character[] = [];

  deleteCharacter(index: number) {
    this.onDeletedCharacter.emit(index);
  }


}
