import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsContainerComponent } from './cardsContainer.component';

describe('CardsComponent', () => {
  let component: CardsContainerComponent;
  let fixture: ComponentFixture<CardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});