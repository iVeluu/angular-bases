import { Component } from '@angular/core';
import { Character } from '../types/CharacterType';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
    
    public characters: Character[] = [
        {
            name: 'Goku',
            power: 15000
        },
        {
            name: 'Vegeta',
            power: 7500
        },
        {
            name: 'Trunks',
            power: 5000
        }
    ]

    onNewCharacter(character: Character) {
        this.characters.push(character);
    }

    onDeleteCharacter(index: number) {
        this.characters.splice(index, 1);
    }

}