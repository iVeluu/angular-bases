import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../types/CharacterType';

@Component({
  selector: 'dbz-form-add-character',
  templateUrl: './form-add-character.component.html',
  styleUrls: ['./form-add-character.component.css']
})
export class FormAddCharacterComponent {

  @Output()
  public onEventEmitter : EventEmitter<Character> = new EventEmitter<Character>();

  public character : Character = {
    'name': '',
    'power': 0
  }

  emitCharacter() {
    
    //Prevent empty characters
    if (this.character.name.trim().length === 0) {
      alert('Name is required');
      return; 
    }

    //Show the character at the console
    console.log('Desde el formulario');
    console.log(this.character);

    // Emit the character
    this.onEventEmitter.emit(this.character);

    // Reset the form
    this.character = {
      'name': '',
      'power': 0
    }

    return
  }
}
