import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUserTemplateFormComponent } from './test-user-template-form.component';

describe('TestUserTemplateFormComponent', () => {
  let component: TestUserTemplateFormComponent;
  let fixture: ComponentFixture<TestUserTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestUserTemplateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestUserTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
