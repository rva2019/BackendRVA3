import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DobavljacDialogComponent } from './dobavljac-dialog.component';

describe('DobavljacDialogComponent', () => {
  let component: DobavljacDialogComponent;
  let fixture: ComponentFixture<DobavljacDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DobavljacDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DobavljacDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
