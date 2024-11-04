import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadModalComponent } from './cad-modal.component';

describe('CadModalComponent', () => {
  let component: CadModalComponent;
  let fixture: ComponentFixture<CadModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
