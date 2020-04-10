import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeitemComponent } from './pokeitem.component';

describe('PokeitemComponent', () => {
  let component: PokeitemComponent;
  let fixture: ComponentFixture<PokeitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
