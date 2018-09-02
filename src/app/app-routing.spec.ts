import { TestBed, async, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard';
import { SideNavigationComponent } from './side-navigation';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ReactiveformComponent } from './reactiveform';

describe('Routing: App', () => {
  let location: Location;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        SideNavigationComponent,
        DashboardComponent
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.get(Router);
    router.initialNavigation();
  });

  it('fakeAsync works', fakeAsync(() => {
    const promise = new Promise((resolve) => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => done = true);
    tick(50);
    expect(done).toBeTruthy();
  }));
  it('Should redirect to dashboard for empty path', fakeAsync(() => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/dashboard');
    });
  }));
  it('Should redirect to dashboard for wrong path', fakeAsync(() => {
    router.navigate(['wrongpath']).then(() => {
      expect(location.path()).toBe('/dashboard');
    });
  }));
  it('Should redirect to dashboard', fakeAsync(() => {
    router.navigate(['/dashboard']).then(() => {
      expect(location.path()).toBe('/dashboard');
    });
  }));
  // it('Should redirect to reactiveform', fakeAsync(() => {
  //   router.navigate(['/reactiveform']).then(() => {
  //     expect(location.path()).toBe('/reactiveform');
  //   });
  // }));
});
