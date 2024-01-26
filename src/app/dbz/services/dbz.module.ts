import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinePageComponent } from '../pages/mine-page.component';
import { ListComponent } from '../componenst/list/list.component';
import { AddCharacterComponent } from '../componenst/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MinePageComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  exports: [
    MinePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
