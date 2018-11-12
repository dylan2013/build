import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedLoginComponent } from './speed-login.component';

describe('SpeedLoginComponent', () => {
  let component: SpeedLoginComponent;
  let fixture: ComponentFixture<SpeedLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
