import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalLandComponent } from './final-land.component';

describe('FinalLandComponent', () => {
  let component: FinalLandComponent;
  let fixture: ComponentFixture<FinalLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalLandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
