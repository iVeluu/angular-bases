import { Component, Input } from '@angular/core';
import { Character } from '../../types/CharacterType';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public charactersList: Character[] = [];

  deleteCharacter(index: number) {
    this.charactersList.splice(index, 1);
  }
}
