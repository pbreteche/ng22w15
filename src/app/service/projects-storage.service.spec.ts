import { TestBed } from '@angular/core/testing';

import { ProjectsStorageService } from './projects-storage.service';

describe('ProjectsStorageService', () => {
  let service: ProjectsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
