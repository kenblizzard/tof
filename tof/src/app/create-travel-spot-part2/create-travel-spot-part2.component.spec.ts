import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTravelSpotPart2Component } from './create-travel-spot-part2.component';

describe('CreateTravelSpotPart2Component', () => {
  let component: CreateTravelSpotPart2Component;
  let fixture: ComponentFixture<CreateTravelSpotPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTravelSpotPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTravelSpotPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
