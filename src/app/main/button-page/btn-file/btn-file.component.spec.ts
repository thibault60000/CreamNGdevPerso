import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFileComponent } from './btn-file.component';

describe('BtnFileComponent', () => {
  let component: BtnFileComponent;
  let fixture: ComponentFixture<BtnFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
