import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTravelSpotComponent } from './main-travel-spot.component';

describe('MainTravelSpotComponent', () => {
  let component: MainTravelSpotComponent;
  let fixture: ComponentFixture<MainTravelSpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTravelSpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTravelSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
