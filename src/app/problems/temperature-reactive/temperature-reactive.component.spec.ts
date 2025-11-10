import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureReactiveComponent } from './temperature-reactive.component';

describe('TemperatureReactiveComponent', () => {
  let component: TemperatureReactiveComponent;
  let fixture: ComponentFixture<TemperatureReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
