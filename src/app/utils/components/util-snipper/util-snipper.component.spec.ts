import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilSnipperComponent } from './util-snipper.component';

describe('UtilSnipperComponent', () => {
  let component: UtilSnipperComponent;
  let fixture: ComponentFixture<UtilSnipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UtilSnipperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UtilSnipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
