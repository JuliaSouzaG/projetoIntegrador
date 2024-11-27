import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPontosComponent } from './view-pontos.component';

describe('ViewPontosComponent', () => {
  let component: ViewPontosComponent;
  let fixture: ComponentFixture<ViewPontosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPontosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewPontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
