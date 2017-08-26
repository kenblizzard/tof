import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSearchFormComponent } from './main-search-form.component';

describe('MainSearchFormComponent', () => {
  let component: MainSearchFormComponent;
  let fixture: ComponentFixture<MainSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
