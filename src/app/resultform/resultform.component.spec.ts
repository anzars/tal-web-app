import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultformComponent } from './resultform.component';
import {RouterModule} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ResultformComponent', () => {
  let component: ResultformComponent;
  let fixture: ComponentFixture<ResultformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultformComponent ],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    
    expect(component).toBeTruthy();
  });
  
});
