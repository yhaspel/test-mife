import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInternalComponent } from './test-internal.component';

describe('TestInternalComponent', () => {
  let component: TestInternalComponent;
  let fixture: ComponentFixture<TestInternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestInternalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
