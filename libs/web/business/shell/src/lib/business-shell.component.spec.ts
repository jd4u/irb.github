import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessShellComponent } from './business-shell.component';

describe('BusinessShellComponent', () => {
  let component: BusinessShellComponent;
  let fixture: ComponentFixture<BusinessShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
