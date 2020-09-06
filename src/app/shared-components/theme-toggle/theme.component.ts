import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {
    constructor(private themeService: ThemeService) {
        this.darkTheme.valueChanges.subscribe(value => {
            if (value) {
                this.themeService.toggleDark();
            } else {
                this.themeService.toggleLight();
            }
        });
    }
    darkTheme = new FormControl(false);
}