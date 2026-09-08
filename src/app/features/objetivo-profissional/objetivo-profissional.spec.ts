import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObjetivoProfissionalComponent } from './objetivo-profissional';

describe('ObjetivoProfissional', () => {
  let component: ObjetivoProfissionalComponent;
  let fixture: ComponentFixture<ObjetivoProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjetivoProfissionalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ObjetivoProfissionalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
