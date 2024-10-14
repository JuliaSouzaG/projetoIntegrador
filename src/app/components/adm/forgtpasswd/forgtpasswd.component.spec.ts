import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgtpasswdComponent } from './forgtpasswd.component';

describe('ForgtpasswdComponent', () => {
  let component: ForgtpasswdComponent;
  let fixture: ComponentFixture<ForgtpasswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgtpasswdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgtpasswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
