import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBus } from './display-bus';

describe('DisplayBus', () => {
  let component: DisplayBus;
  let fixture: ComponentFixture<DisplayBus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayBus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayBus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
