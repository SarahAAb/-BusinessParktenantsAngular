import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainReplayComponent } from './complain-replay.component';

describe('ComplainReplayComponent', () => {
  let component: ComplainReplayComponent;
  let fixture: ComponentFixture<ComplainReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainReplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplainReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
