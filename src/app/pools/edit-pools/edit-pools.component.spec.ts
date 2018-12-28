import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPoolsComponent } from './edit-pools.component';

describe('EditPoolsComponent', () => {
  let component: EditPoolsComponent;
  let fixture: ComponentFixture<EditPoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
