import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPluginComponent } from './report-plugin.component';

describe('ReportPluginComponent', () => {
  let component: ReportPluginComponent;
  let fixture: ComponentFixture<ReportPluginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPluginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
