import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeComponent } from './theme.component';
import { FormGroupDirective, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ButtonComponent', () => {
    let component: ThemeComponent;
    let fixture: ComponentFixture<ThemeComponent>;
    let formGroupDirective: Partial<FormGroupDirective>;
    const formBuilder: FormBuilder = new FormBuilder();

    beforeEach(async(() => {
        formGroupDirective = {
            form: new FormGroup({})
        };
        TestBed.configureTestingModule({
            declarations: [ThemeComponent],
            imports: [FormsModule,
                ReactiveFormsModule,
                RouterTestingModule,
                BrowserAnimationsModule,
                HttpClientTestingModule],
            providers: [{ provide: FormGroupDirective, useValue: formGroupDirective },
            { provide: FormBuilder, useValue: formBuilder }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ThemeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

