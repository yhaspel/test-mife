import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteralTwoComponent } from './interal-two.component';

describe('InteralTwoComponent', () => {
  let component: InteralTwoComponent;
  let fixture: ComponentFixture<InteralTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteralTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteralTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
