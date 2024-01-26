import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';

import { character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: character [] = [{
    id: uuid(),
    name: "krillin",
    power: 1000
  },{
    id: uuid(),
    name: "Goku",
    power: 9500
  },{
    id: uuid(),
    name: "Dabura",
    power: 3000
  }];

  addCharacter(character: character): void{

    const newCharacter: character ={ id: uuid(), ...character}
    this.characters.push(newCharacter)

    console.log(newCharacter);

  };

  DeleteCharacteByidr(id: string){
    this.characters = this.characters.filter( character => character.id !== id );
  }

  constructor() { }

}
