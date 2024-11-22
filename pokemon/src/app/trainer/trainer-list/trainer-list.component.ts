import { Component, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { dataTrainers } from '../dataTrainers';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Trainer[] = [];
  selected = false;
  selectedTrainer!: Trainer;

  constructor() {}

  ngOnInit(): void {

    this.trainers = dataTrainers.map((trainer) => ({
      ...trainer,
      pokemonCount: trainer.pokemons ? trainer.pokemons.length : 0, 
    }));
  }

  onSelected(trainer: Trainer): void {
    this.selected = true;
    this.selectedTrainer = trainer;
  }
}
