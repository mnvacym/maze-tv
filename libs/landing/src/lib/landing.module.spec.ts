import { TestBed, waitForAsync } from '@angular/core/testing';
import { LandingModule } from './landing.module';

describe('LandingModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LandingModule]
    }).compileComponents();
  }));

  it('should have a module definition', () => {
    expect(LandingModule).toBeDefined();
  });
});
