import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSelfComponent } from './dashboard-self.component';

describe('DashboardSelfComponent', () => {
  let component: DashboardSelfComponent;
  let fixture: ComponentFixture<DashboardSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSelfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
