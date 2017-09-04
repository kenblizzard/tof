import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTravelSpotComponent } from './create-travel-spot.component';

describe('CreateTravelSpotComponent', () => {
  let component: CreateTravelSpotComponent;
  let fixture: ComponentFixture<CreateTravelSpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTravelSpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTravelSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
