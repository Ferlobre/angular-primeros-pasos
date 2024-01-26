import { Component, Input, OnInit } from '@angular/core';
import { character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-mine-page',
  templateUrl: './mine-page.component.html'
})

export class MinePageComponent  {

  constructor( public dbzService: DbzService) {}

  get characters(): character[]{
    return[... this.dbzService.characters];
  }

  onDeleteCharacter( id: string ): void{
    this.dbzService.DeleteCharacteByidr( id );
  }

  onNewCharacter( character: character ): void{
    this.dbzService.addCharacter( character );
  }

}
