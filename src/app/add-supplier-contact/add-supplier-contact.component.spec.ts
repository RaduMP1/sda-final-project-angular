import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupplierContactComponent } from './add-supplier-contact.component';

describe('AddSupplierContactComponent', () => {
  let component: AddSupplierContactComponent;
  let fixture: ComponentFixture<AddSupplierContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSupplierContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSupplierContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
