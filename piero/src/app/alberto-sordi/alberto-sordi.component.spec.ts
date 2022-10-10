import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbertoSordiComponent } from './alberto-sordi.component';

describe('AlbertoSordiComponent', () => {
  let component: AlbertoSordiComponent;
  let fixture: ComponentFixture<AlbertoSordiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbertoSordiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbertoSordiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
