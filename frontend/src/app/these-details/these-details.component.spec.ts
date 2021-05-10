import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheseDetailsComponent } from './these-details.component';

describe('TheseDetailsComponent', () => {
  let component: TheseDetailsComponent;
  let fixture: ComponentFixture<TheseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
