import { Pokemon } from '../pokemon/Pokemon';

export class Trainer {
[x: string]: any;
  id: number;
  name: string;
  age: number;
  imageUrl: string;
  smallSnopsies: string;
  bigSnopsies: string;
  pokemons: Array<Pokemon>;

  public constructor(
    id: number,
    name: string,
    age: number,
    imageUrl: string,
    smallSnopsies: string,
    bigSnopsies: string,
    pokemons: Array<Pokemon>
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.imageUrl = imageUrl;
    this.smallSnopsies = smallSnopsies;
    this.bigSnopsies = bigSnopsies;
    this.pokemons = pokemons;
  }
}
