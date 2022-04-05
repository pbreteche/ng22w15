import { TestBed } from '@angular/core/testing';

import { TasksLoaderService } from './tasks-loader.service';

describe('TasksLoaderService', () => {
  let service: TasksLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
