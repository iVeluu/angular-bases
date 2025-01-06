import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddCharacterComponent } from './form-add-character.component';

describe('FormAddCharacterComponent', () => {
  let component: FormAddCharacterComponent;
  let fixture: ComponentFixture<FormAddCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
