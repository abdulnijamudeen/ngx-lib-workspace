import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStyleComponent } from './ngx-style.component';

describe('NgxStyleComponent', () => {
  let component: NgxStyleComponent;
  let fixture: ComponentFixture<NgxStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
