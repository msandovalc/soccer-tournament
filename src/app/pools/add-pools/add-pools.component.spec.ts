import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoolsComponent } from './add-pools.component';

describe('AddPoolsComponent', () => {
  let component: AddPoolsComponent;
  let fixture: ComponentFixture<AddPoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
