import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveBuilderFormComponent } from './reactive-builder-form.component';

describe('ReactiveBuilderFormComponent', () => {
  let component: ReactiveBuilderFormComponent;
  let fixture: ComponentFixture<ReactiveBuilderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveBuilderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveBuilderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
