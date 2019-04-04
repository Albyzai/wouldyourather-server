import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilemmaButtonComponent } from './dilemma-button.component';

describe('DilemmaButtonComponent', () => {
  let component: DilemmaButtonComponent;
  let fixture: ComponentFixture<DilemmaButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilemmaButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilemmaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
