import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSupplierContactComponent } from './update-supplier-contact.component';

describe('UpdateSupplierContactComponent', () => {
  let component: UpdateSupplierContactComponent;
  let fixture: ComponentFixture<UpdateSupplierContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSupplierContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSupplierContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
