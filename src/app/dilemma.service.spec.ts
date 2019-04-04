import { TestBed } from '@angular/core/testing';

import { DilemmaService } from './dilemma.service';

describe('DilemmaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DilemmaService = TestBed.get(DilemmaService);
    expect(service).toBeTruthy();
  });
});
