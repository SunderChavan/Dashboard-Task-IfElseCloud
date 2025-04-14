import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsMonitoredComponent } from './vendors-monitored.component';

describe('VendorsMonitoredComponent', () => {
  let component: VendorsMonitoredComponent;
  let fixture: ComponentFixture<VendorsMonitoredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorsMonitoredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorsMonitoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
