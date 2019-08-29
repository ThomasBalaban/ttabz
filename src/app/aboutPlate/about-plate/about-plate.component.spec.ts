import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPlateComponent } from './about-plate.component';

describe('AboutPlateComponent', () => {
  let component: AboutPlateComponent;
  let fixture: ComponentFixture<AboutPlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
