import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsSection } from './results-section';

describe('ResultsSection', () => {
  let component: ResultsSection;
  let fixture: ComponentFixture<ResultsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsSection],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
