import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sa-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() title: any;
    @Input() desc: any;
    @Input() category: any;
    @Input() year: any;
    @Input() id: any;
    @Input() isLoggedIn: boolean;
    @Output()
    change: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    delete: EventEmitter<any> = new EventEmitter<any>();
    constructor() { }

    ngOnInit() {
    }
    update() {
        this.change.emit(this.id);
    }

    remove(){
        this.delete.emit(this.id)
    }
}