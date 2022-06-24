import { TestBed, waitForAsync } from '@angular/core/testing';
import { DataAccessModule } from './data-access.module';

describe('DataAccessModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DataAccessModule]
    }).compileComponents();
  }));

  it('should have a module definition', () => {
    expect(DataAccessModule).toBeDefined();
  });
});
