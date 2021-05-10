import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheseValidateComponent } from './these-validate.component';

describe('TheseValidateComponent', () => {
  let component: TheseValidateComponent;
  let fixture: ComponentFixture<TheseValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheseValidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheseValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
