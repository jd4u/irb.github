import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamsShellComponent } from './teams-shell.component';

describe('TeamsShellComponent', () => {
  let component: TeamsShellComponent;
  let fixture: ComponentFixture<TeamsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
