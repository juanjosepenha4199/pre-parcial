import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokemonModule } from '../pokemon/pokemon.module';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';

@NgModule({
  imports: [CommonModule, PokemonModule],
  declarations: [TrainerListComponent, TrainerDetailComponent],
  exports: [TrainerListComponent],
  /*HttpClientModule,*/
})
export class TrainerModule {}
