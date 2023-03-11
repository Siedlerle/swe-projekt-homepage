import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeschuetzteAbgabenComponent } from './geschuetzte-abgaben.component';

describe('GeschuetzteAbgabenComponent', () => {
  let component: GeschuetzteAbgabenComponent;
  let fixture: ComponentFixture<GeschuetzteAbgabenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeschuetzteAbgabenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeschuetzteAbgabenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
