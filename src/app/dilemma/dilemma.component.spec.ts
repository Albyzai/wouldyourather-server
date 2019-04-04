import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilemmaComponent } from './dilemma.component';

describe('DilemmaComponent', () => {
  let component: DilemmaComponent;
  let fixture: ComponentFixture<DilemmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilemmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilemmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
