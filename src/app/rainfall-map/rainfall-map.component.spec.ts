/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RainfallMapComponent } from './rainfall-map.component';

describe('RainfallMapComponent', () => {
  let component: RainfallMapComponent;
  let fixture: ComponentFixture<RainfallMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainfallMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainfallMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
