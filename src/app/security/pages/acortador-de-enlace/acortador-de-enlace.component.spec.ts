import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcortadorDeEnlaceComponent } from './acortador-de-enlace.component';

describe('AcortadorDeEnlaceComponent', () => {
  let component: AcortadorDeEnlaceComponent;
  let fixture: ComponentFixture<AcortadorDeEnlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcortadorDeEnlaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcortadorDeEnlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
