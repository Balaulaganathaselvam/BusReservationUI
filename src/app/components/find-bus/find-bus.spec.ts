import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBus } from './find-bus';

describe('FindBus', () => {
  let component: FindBus;
  let fixture: ComponentFixture<FindBus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindBus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindBus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
