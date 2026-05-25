import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneySection } from './journey-section';

describe('JourneySection', () => {
  let component: JourneySection;
  let fixture: ComponentFixture<JourneySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourneySection],
    }).compileComponents();

    fixture = TestBed.createComponent(JourneySection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
