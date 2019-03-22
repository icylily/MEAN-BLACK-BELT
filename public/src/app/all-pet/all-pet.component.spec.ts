import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPetComponent } from './all-pet.component';

describe('AllPetComponent', () => {
  let component: AllPetComponent;
  let fixture: ComponentFixture<AllPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
