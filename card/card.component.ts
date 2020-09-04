import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'sa-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() title: any;
    @Input() desc:any;
    @Input() category:any;
    @Input() year:any;
    constructor() { }

    ngOnInit() {
        console.log(this.title,this.desc,this.category);
        
     }
}