import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAlltextComponent } from './ngx-alltext.component';

describe('NgxAlltextComponent', () => {
  let component: NgxAlltextComponent;
  let fixture: ComponentFixture<NgxAlltextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxAlltextComponent]
    });
    fixture = TestBed.createComponent(NgxAlltextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
