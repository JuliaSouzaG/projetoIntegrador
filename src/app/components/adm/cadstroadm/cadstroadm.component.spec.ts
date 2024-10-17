import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadstroadmComponent } from './cadstroadm.component';

describe('CadstroadmComponent', () => {
  let component: CadstroadmComponent;
  let fixture: ComponentFixture<CadstroadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadstroadmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadstroadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
