import { TestBed } from '@angular/core/testing';

import { CreateTicketService } from './createTicket.service';

describe('SignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateTicketService = TestBed.get(CreateTicketService);
    expect(service).toBeTruthy();
  });
});
