import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientContactComponent } from './add-client-contact.component';

describe('AddClientContactComponent', () => {
  let component: AddClientContactComponent;
  let fixture: ComponentFixture<AddClientContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
