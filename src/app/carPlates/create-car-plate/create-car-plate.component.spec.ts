import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarPlateComponent } from './create-car-plate.component';

describe('CreateCarPlateComponent', () => {
  let component: CreateCarPlateComponent;
  let fixture: ComponentFixture<CreateCarPlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCarPlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCarPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
