import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadPontoComponent } from './cad-ponto.component';

describe('CadPontoComponent', () => {
  let component: CadPontoComponent;
  let fixture: ComponentFixture<CadPontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadPontoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadPontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
