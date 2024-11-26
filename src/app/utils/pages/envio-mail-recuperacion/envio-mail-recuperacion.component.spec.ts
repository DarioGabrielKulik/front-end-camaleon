import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioMailRecuperacionComponent } from './envio-mail-recuperacion.component';

describe('EnvioMailRecuperacionComponent', () => {
  let component: EnvioMailRecuperacionComponent;
  let fixture: ComponentFixture<EnvioMailRecuperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnvioMailRecuperacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnvioMailRecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
