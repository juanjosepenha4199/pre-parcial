import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  @Input() trainerDetail!: Trainer;
  averageLevel: number = 0;

  ngOnInit(): void {
    if (this.trainerDetail.pokemons && this.trainerDetail.pokemons.length > 0) {
      const totalLevel = this.trainerDetail.pokemons.reduce(
        (sum, pokemon) => sum + (pokemon.level || 0),
        0
      );
      this.averageLevel = totalLevel / this.trainerDetail.pokemons.length;
    }
  }
}
