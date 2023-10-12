import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsShellComponent } from './contacts-shell.component';

describe('ContactsShellComponent', () => {
  let component: ContactsShellComponent;
  let fixture: ComponentFixture<ContactsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
