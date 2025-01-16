import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from './auth.sevice'

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}
describe('AuthSevice', () => {
  let component: AuthService;
  let fixture: ComponentFixture<AuthService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
