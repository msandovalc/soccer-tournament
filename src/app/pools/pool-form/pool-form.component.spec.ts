import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolFormComponent } from './pool-form.component';

describe('PoolFormComponent', () => {
  let component: PoolFormComponent;
  let fixture: ComponentFixture<PoolFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
