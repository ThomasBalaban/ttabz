import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeLookComponent } from './take-look.component';

describe('TakeLookComponent', () => {
  let component: TakeLookComponent;
  let fixture: ComponentFixture<TakeLookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeLookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
