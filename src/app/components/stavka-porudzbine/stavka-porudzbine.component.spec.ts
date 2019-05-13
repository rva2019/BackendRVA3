import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StavkaPorudzbineComponent } from './stavka-porudzbine.component';

describe('StavkaPorudzbineComponent', () => {
  let component: StavkaPorudzbineComponent;
  let fixture: ComponentFixture<StavkaPorudzbineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StavkaPorudzbineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StavkaPorudzbineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
