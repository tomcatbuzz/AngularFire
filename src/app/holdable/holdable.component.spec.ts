import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldableComponent } from './holdable.component';

describe('HoldableComponent', () => {
  let component: HoldableComponent;
  let fixture: ComponentFixture<HoldableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
