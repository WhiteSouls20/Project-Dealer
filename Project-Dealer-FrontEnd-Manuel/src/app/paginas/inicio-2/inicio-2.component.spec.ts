import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inicio2Component } from './inicio-2.component';

describe('Inicio2Component', () => {
  let component: Inicio2Component;
  let fixture: ComponentFixture<Inicio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inicio2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inicio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
