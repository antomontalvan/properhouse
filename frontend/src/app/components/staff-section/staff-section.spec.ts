import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSection } from './staff-section';

describe('StaffSection', () => {
  let component: StaffSection;
  let fixture: ComponentFixture<StaffSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffSection],
    }).compileComponents();

    fixture = TestBed.createComponent(StaffSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
