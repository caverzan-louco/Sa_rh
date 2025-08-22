import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcurriculoComponent } from './addcurriculo.component';

describe('AddcurriculoComponent', () => {
  let component: AddcurriculoComponent;
  let fixture: ComponentFixture<AddcurriculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcurriculoComponent]
    });
    fixture = TestBed.createComponent(AddcurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
