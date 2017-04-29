/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeforestationMapComponent } from './deforestation-map.component';

describe('DeforestationMapComponent', () => {
  let component: DeforestationMapComponent;
  let fixture: ComponentFixture<DeforestationMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeforestationMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeforestationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
