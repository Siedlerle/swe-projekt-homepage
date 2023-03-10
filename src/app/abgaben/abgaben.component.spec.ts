import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbgabenComponent } from './abgaben.component';

describe('AbgabenComponent', () => {
  let component: AbgabenComponent;
  let fixture: ComponentFixture<AbgabenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbgabenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbgabenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
