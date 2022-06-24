import { TestBed, waitForAsync } from '@angular/core/testing';
import { UtilsModule } from './utils.module';

describe('UtilsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UtilsModule]
    }).compileComponents();
  }));

  it('should have a module definition', () => {
    expect(UtilsModule).toBeDefined();
  });
});
