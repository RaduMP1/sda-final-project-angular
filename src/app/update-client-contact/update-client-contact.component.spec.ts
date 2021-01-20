import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientContactComponent } from './update-client-contact.component';

describe('UpdateClientContactComponent', () => {
  let component: UpdateClientContactComponent;
  let fixture: ComponentFixture<UpdateClientContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateClientContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
