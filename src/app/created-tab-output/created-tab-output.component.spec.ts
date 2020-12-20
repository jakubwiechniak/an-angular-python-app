import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedTabOutputComponent } from './created-tab-output.component';

describe('CreatedTabOutputComponent', () => {
  let component: CreatedTabOutputComponent;
  let fixture: ComponentFixture<CreatedTabOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedTabOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedTabOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
