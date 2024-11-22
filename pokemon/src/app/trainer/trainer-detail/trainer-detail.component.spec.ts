/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Trainer } from '../Trainer';
import { TrainerDetailComponent } from './trainer-detail.component';

describe('TrainerDetailComponent', () => {
  let component: TrainerDetailComponent;
  let fixture: ComponentFixture<TrainerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerDetailComponent);
    component = fixture.componentInstance;
    const mockTrainer: Trainer = {
      id: 1,
      name: 'Ash Ketchum',
      imageUrl: 'https://example.com/ash.png',
      smallSnopsies: 'The very best, like no one ever was.',
      age: 0,
      bigSnopsies: '',
      pokemons: []
    };

    component.trainerDetail = mockTrainer;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the trainer name', () => {
    const nameElement: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;
    expect(nameElement.textContent).toContain('Ash Ketchum');
  });

  it('should display the trainer image', () => {
    const imgElement: HTMLImageElement = fixture.debugElement.query(
      By.css('img')
    ).nativeElement;
    expect(imgElement.src).toBe('https://example.com/ash.png');
  });

  it('should display the trainer description', () => {
    const descriptionElement: HTMLElement = fixture.debugElement.query(
      By.css('p')
    ).nativeElement;
    expect(descriptionElement.textContent).toContain(
      'A Pokémon master in training.'
    );
  });
});
