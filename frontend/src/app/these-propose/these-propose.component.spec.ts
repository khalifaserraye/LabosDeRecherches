import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheseProposeComponent } from './these-propose.component';

describe('TheseProposeComponent', () => {
  let component: TheseProposeComponent;
  let fixture: ComponentFixture<TheseProposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheseProposeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheseProposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
