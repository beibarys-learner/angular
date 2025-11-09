import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTable2Component } from './generate-table2.component';

describe('GenerateTable2Component', () => {
  let component: GenerateTable2Component;
  let fixture: ComponentFixture<GenerateTable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateTable2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
