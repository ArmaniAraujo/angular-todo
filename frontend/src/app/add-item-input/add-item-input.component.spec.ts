import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemInputComponent } from './add-item-input.component';

describe('AddItemInputComponent', () => {
  let component: AddItemInputComponent;
  let fixture: ComponentFixture<AddItemInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddItemInputComponent]
    });
    fixture = TestBed.createComponent(AddItemInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
