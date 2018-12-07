import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanusrComponent } from './banusr.component';

describe('BanusrComponent', () => {
  let component: BanusrComponent;
  let fixture: ComponentFixture<BanusrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanusrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanusrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
