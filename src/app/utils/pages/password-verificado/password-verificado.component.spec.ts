import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordVerificadoComponent } from './password-verificado.component';

describe('PasswordVerificadoComponent', () => {
  let component: PasswordVerificadoComponent;
  let fixture: ComponentFixture<PasswordVerificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordVerificadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordVerificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
