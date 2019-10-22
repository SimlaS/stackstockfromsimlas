import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MipapiComponent } from './mipapi.component';

describe('MipapiComponent', () => {
  let component: MipapiComponent;
  let fixture: ComponentFixture<MipapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MipapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MipapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
