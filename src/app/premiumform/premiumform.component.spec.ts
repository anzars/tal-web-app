import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumformComponent } from './premiumform.component';
import {ControlService} from '../../service/control-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { userService } from 'src/service/Userservice';
import { RouterTestingModule } from '@angular/router/testing';
import {Router} from '@angular/router';

describe('PremiumformComponent', () => {
  let component: PremiumformComponent;
  let fixture: ComponentFixture<PremiumformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumformComponent ] ,
      providers: [ControlService , userService,],
      imports:[ HttpClientTestingModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it('should render title in a h2 tag', async(() => {
    
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Calculate your premium');
  }));

  it('Calculate should be disabled', async(() => {
    
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').disabled).toBeTruthy();
  }));
 
});
