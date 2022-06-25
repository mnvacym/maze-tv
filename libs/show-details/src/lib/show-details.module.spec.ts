import { TestBed, waitForAsync } from '@angular/core/testing';
import { ShowDetailsModule } from './show-details.module';

describe('ShowDetailsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ShowDetailsModule]
    }).compileComponents();
  }));

  it('should have a module definition', () => {
    expect(ShowDetailsModule).toBeDefined();
  });
});
