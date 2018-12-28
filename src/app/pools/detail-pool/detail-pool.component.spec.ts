import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPoolComponent } from './detail-pool.component';

describe('DetailPoolComponent', () => {
  let component: DetailPoolComponent;
  let fixture: ComponentFixture<DetailPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
