import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolyGrailComponent } from './holy-grail.component';

describe('HolyGrailComponent', () => {
  let component: HolyGrailComponent;
  let fixture: ComponentFixture<HolyGrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolyGrailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolyGrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
