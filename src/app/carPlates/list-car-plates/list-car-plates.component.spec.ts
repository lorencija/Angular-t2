import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarPlatesComponent } from './list-car-plates.component';

describe('ListCarPlatesComponent', () => {
  let component: ListCarPlatesComponent;
  let fixture: ComponentFixture<ListCarPlatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCarPlatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCarPlatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
