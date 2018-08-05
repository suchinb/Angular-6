import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SideNavigationComponent } from './side-navigation';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let compiled: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        SideNavigationComponent
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'test2'`, async(() => {
    expect(app.title).toEqual('test2');
  }));
  it('should render title in a h1 tag', async(() => {
    expect(compiled.querySelector('h1').textContent).toContain('Angular 4 snippets');
  }));
  it('should [content] has two children', async(() => {
    expect(compiled.querySelector('.content').children.length).toBe(2);
  }));
});
