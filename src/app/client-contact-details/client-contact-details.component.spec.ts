import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientContactDetailsComponent } from './client-contact-details.component';

describe('ClientContactDetailsComponent', () => {
  let component: ClientContactDetailsComponent;
  let fixture: ComponentFixture<ClientContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientContactDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
