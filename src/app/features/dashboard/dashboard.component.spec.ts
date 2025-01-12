import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '../../app.config';
import { AppRoutingComponent } from './app/approuting.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
bootstrapApplication(AppRoutingComponent, {
  providers: [
    ...appConfig(),
    // Outros providers globai
  ]
});
