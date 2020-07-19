import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreestudyComponent } from './freestudy.component';

describe('FreestudyComponent', () => {
  let component: FreestudyComponent;
  let fixture: ComponentFixture<FreestudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreestudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreestudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
