import { TestBed } from '@angular/core/testing';

import { QuizServicesService } from './quiz-services.service';

describe('QuizServicesService', () => {
  let service: QuizServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
