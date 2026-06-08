import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCard } from './staff-card';

describe('StaffCard', () => {
  let component: StaffCard;
  let fixture: ComponentFixture<StaffCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
