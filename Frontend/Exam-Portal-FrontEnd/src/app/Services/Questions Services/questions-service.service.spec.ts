import { TestBed } from '@angular/core/testing';

import { QuestionsServiceService } from './questions-service.service';

describe('QuestionsServiceService', () => {
  let service: QuestionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
