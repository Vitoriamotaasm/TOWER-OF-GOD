import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSeviceTsComponent } from './auth.sevice.ts.component';

describe('AuthSeviceTsComponent', () => {
  let component: AuthSeviceTsComponent;
  let fixture: ComponentFixture<AuthSeviceTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSeviceTsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthSeviceTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
