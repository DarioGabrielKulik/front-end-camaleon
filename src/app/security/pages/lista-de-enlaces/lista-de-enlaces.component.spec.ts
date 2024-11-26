import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeEnlacesComponent } from './lista-de-enlaces.component';

describe('ListaDeEnlacesComponent', () => {
  let component: ListaDeEnlacesComponent;
  let fixture: ComponentFixture<ListaDeEnlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaDeEnlacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaDeEnlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
