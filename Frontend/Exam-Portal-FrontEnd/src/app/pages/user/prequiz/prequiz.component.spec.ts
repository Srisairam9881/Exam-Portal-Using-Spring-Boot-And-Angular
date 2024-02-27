import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrequizComponent } from './prequiz.component';

describe('PrequizComponent', () => {
  let component: PrequizComponent;
  let fixture: ComponentFixture<PrequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrequizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
