import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionPlateComponent } from './mission-plate.component';

describe('MissionPlateComponent', () => {
  let component: MissionPlateComponent;
  let fixture: ComponentFixture<MissionPlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionPlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
