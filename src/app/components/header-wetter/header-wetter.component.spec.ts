import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWetterComponent } from './header-wetter.component';

describe('HeaderWetterComponent', () => {
  let component: HeaderWetterComponent;
  let fixture: ComponentFixture<HeaderWetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWetterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
