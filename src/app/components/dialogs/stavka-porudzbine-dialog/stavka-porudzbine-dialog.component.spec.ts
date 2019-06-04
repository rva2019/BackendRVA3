import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StavkaPorudzbineDialogComponent } from './stavka-porudzbine-dialog.component';

describe('StavkaPorudzbineDialogComponent', () => {
  let component: StavkaPorudzbineDialogComponent;
  let fixture: ComponentFixture<StavkaPorudzbineDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StavkaPorudzbineDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StavkaPorudzbineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
