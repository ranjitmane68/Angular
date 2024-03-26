import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReactiveUserFormsComponent } from './test-reactive-user-forms.component';

describe('TestReactiveUserFormsComponent', () => {
  let component: TestReactiveUserFormsComponent;
  let fixture: ComponentFixture<TestReactiveUserFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestReactiveUserFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestReactiveUserFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
