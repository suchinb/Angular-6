import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationComponent } from './side-navigation.component';

describe('SideNavigationComponent', () => {
  let component: SideNavigationComponent;
  let fixture: ComponentFixture<SideNavigationComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two navigation links', () => {
    expect(compiled.querySelector('.side-nav').children.length).toBe(2);
  });
  it('should have first link pointed to /dashboard', () => {
    expect(compiled.querySelector('.side-nav').firstChild.getAttribute('routerLink')).toBe('/dashboard');
  });
});
