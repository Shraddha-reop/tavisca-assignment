import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from '../btn-component/btn-component.component';


describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.buttonConfig = {
      text: 'Button Text',
      src: ''
    };
    expect(component).toBeTruthy();
  });
});

