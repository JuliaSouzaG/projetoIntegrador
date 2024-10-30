import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadAdmComponent } from './cad-adm.component';

describe('CadAdmComponent', () => {
  let component: CadAdmComponent;
  let fixture: ComponentFixture<CadAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadAdmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
